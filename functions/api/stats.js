export async function onRequestGet(context) {
    const { env } = context;
    
    // Bắt buộc phải có KV Namespace tên là QR_STATS
    if (!env.QR_STATS) {
        return new Response(JSON.stringify({ error: 'KV Namespace QR_STATS not bound' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }

    const statsStr = await env.QR_STATS.get('stats');
    let stats = null;
    
    if (statsStr) {
        try {
            stats = JSON.parse(statsStr);
        } catch (e) {}
    }

    // Giờ Việt Nam (GMT+7)
    const d = new Date();
    const offset = 7 * 60 * 60 * 1000;
    const vnDate = new Date(d.getTime() + offset);
    const today = vnDate.toISOString().split('T')[0];

    if (!stats) {
        stats = {
            totalQR: 0,
            totalSessions: 0,
            todayDate: today,
            todaySessions: 0,
            lastUpdated: null
        };
    }

    if (stats.todayDate !== today) {
        stats.todaySessions = 0;
    }

    let totalQR = stats.totalQR;
    let totalSessions = stats.totalSessions;
    let todaySessions = stats.todaySessions;
    let lastUpdated = stats.lastUpdated;

    // --- FAKE DATA LOGIC START ---
    const fakeStartStr = "2026-06-01T00:00:00+07:00";
    const fakeStartTimestamp = Math.floor(new Date(fakeStartStr).getTime() / 1000);
    
    const currentTimeSec = Math.floor(d.getTime() / 1000); 
    const currentHour = Math.floor(currentTimeSec / 3600);
    const startHour = Math.floor(fakeStartTimestamp / 3600);
    
    const todayStartString = today + "T00:00:00+07:00";
    const todayStartTimestamp = Math.floor(new Date(todayStartString).getTime() / 1000);
    const todayStartHour = Math.floor(todayStartTimestamp / 3600);

    let fakeTotalSessions = 0;
    let fakeTodaySessions = 0;
    let fakeTotalQR = 0;

    // Hàm random seed giả lập mt_srand của PHP để dữ liệu fake đồng nhất
    function mulberry32(a) {
        return function() {
            var t = a += 0x6D2B79F5;
            t = Math.imul(t ^ t >>> 15, t | 1);
            t ^= t + Math.imul(t ^ t >>> 7, t | 61);
            return ((t ^ t >>> 14) >>> 0) / 4294967296;
        }
    }

    for (let h = startHour; h <= currentHour; h++) {
        const rand = mulberry32(h);
        const fakeAdd = Math.floor(rand() * 51); // rand 0-50
        fakeTotalSessions += fakeAdd;
        fakeTotalQR += Math.floor(rand() * 26); // rand 0-25

        if (h >= todayStartHour) {
            fakeTodaySessions += fakeAdd;
        }
    }

    if (fakeTotalSessions > 0) {
        const rand = mulberry32(currentHour);
        const randOffset = Math.floor(rand() * 3600);
        let fakeLastUpdatedTime = (currentHour * 3600) + randOffset;
        
        if (fakeLastUpdatedTime > currentTimeSec) {
            const rand2 = mulberry32(currentHour + 999); // Thêm số bù để random lại
            fakeLastUpdatedTime = currentTimeSec - Math.floor(rand2() * 61);
        }
        
        // format ISO cho lastUpdated
        const fakeLastUpdatedIso = new Date(fakeLastUpdatedTime * 1000).toISOString();
        if (lastUpdated === null || fakeLastUpdatedIso > lastUpdated) {
            lastUpdated = fakeLastUpdatedIso;
        }
    }

    totalSessions += fakeTotalSessions;
    todaySessions += fakeTodaySessions;
    totalQR += fakeTotalQR;
    // --- FAKE DATA LOGIC END ---

    return new Response(JSON.stringify({
        totalQR: totalQR,
        totalSessions: totalSessions,
        todaySessions: todaySessions,
        lastUpdated: lastUpdated
    }), {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache, no-store, must-revalidate'
        }
    });
}
