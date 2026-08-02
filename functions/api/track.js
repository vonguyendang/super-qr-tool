export async function onRequestPost(context) {
    const { request, env } = context;

    try {
        const input = await request.json();
        
        if (!input || typeof input.qr_count !== 'number') {
            return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
        }

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

        // Lấy giờ Việt Nam (GMT+7)
        const d = new Date();
        const offset = 7 * 60 * 60 * 1000;
        const vnDate = new Date(d.getTime() + offset);
        const today = vnDate.toISOString().split('T')[0];
        const lastUpdated = vnDate.toISOString();

        if (!stats) {
            stats = {
                totalQR: 0,
                totalSessions: 0,
                todayDate: today,
                todaySessions: 0,
                lastUpdated: lastUpdated
            };
        }

        if (stats.todayDate !== today) {
            stats.todayDate = today;
            stats.todaySessions = 0;
        }

        stats.totalQR += input.qr_count;
        stats.totalSessions += 1;
        stats.todaySessions += 1;
        stats.lastUpdated = lastUpdated;

        await env.QR_STATS.put('stats', JSON.stringify(stats));

        return new Response(JSON.stringify({ success: true }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { 'Content-Type': 'application/json' } });
    }
}
