const getCodeList = () => {
  return [
    {
      title: "线性条码",
      en_title: "Linear barcodes",
      icon: "./img/code/code-icon-1.png",
      children: [
        {
          title: "CODE128",
          url: 'code-128',
          type: "CODE128",
          codeType: "BarCode",
          img: "./img/code/code128.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title: "Free QR Code Generator: Create Custom QR Codes Online",
            description:
              "Free online QR code builder for url, text, images, videos and more.  Add logos, frames, colors. Easy, quick, and completely free!",
            keywords:
              "QR code builder, Free barcode maker,  1D Barcode, 2D Barcode Creator, ",
          },
          rules: [
            "字符集：CODE128支持全部128个ASCII字符。",
            "字符长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: CODE128 supports all 128 ASCII characters.",
            "Length: variable length, theoretically unlimited limit",
          ],
          introduceList: [
            {
              title: "企业内部管理",
              en_title: "Internal Management Of The Enterprise",
              text: "CODE128和CODE128A条码在企业内部管理中发挥着不可或缺的作用。它们能够编码大量的数据，如员工信息、资产信息等，从而提升企业信息管理的效率和资源调度的精确性。",
              en_text:
                "CODE 128 barcode is critical to corporate internal governance, capable of encoding extensive data like employee and asset details, thereby streamlining corporate data handling and precision in resource allocation.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Internal management of the enterprise.jpg",
            },
            {
              title: "生产流程",
              en_title: "Production Process",
              text: "在生产流程中，CODE128和CODE128B条码的应用也十分广泛。它们能够编码各类信息，如原材料信息、生产批次、质检数据等，从而助力企业实现生产过程的精细化管理，提升生产效率和产品质量。",
              en_text:
                "CODE 128 is essential in the manufacturing workflow, encoding a breadth of data including raw material specifics, batch numbers, and quality metrics, aiding in the granular oversight of production, and bolstering both efficiency and product excellence.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Production process.png",
            },
            {
              title: "物流控制系统",
              en_title: "Logistics Control System",
              text: "在物流控制系统中，CODE128和CODE128C条码的应用十分显著。它们能够编码包裹的目的地、重量、体积等信息，从而提升包裹处理、路由和跟踪的效率，提升配送的速度和准确性。",
              en_text:
                "CODE 128 barcode is important within logistic frameworks, encapsulating critical shipping details like destination, mass, and volume, thus enhancing parcel processing, navigation, and monitoring, and elevating the promptness and precision of dispatches.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics control system.jpg",
            },
            {
              title: "医疗行业",
              en_title: "Medical Industry",
              text: "CODE128在医疗行业中具有广泛的应用前景，可以用于各种资源的标识、管理、追踪等环节，有助于提高医疗服务的质量和效率，保障患者的安全和权益。",
              en_text:
                "CODE 128 barcode harbor vast potential in healthcare, applicable to the cataloging, administration, and surveillance of diverse resources, contributing to superior medical service quality and efficiency while safeguarding patient well-being and entitlements.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical industry.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE128A",
          url: 'code-128-a',
          type: "CODE128A",
          codeType: "BarCode",
          img: "./img/code/CODE128A.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              " Free Code128A Generator - Online Error-free Barcode Generator",
            description:
              "Free Code128A Barcode Generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.  Code 128a is often used in logistics, transportation, inventory management, and healthcare for tracking items and information management. ",
            keywords:
              "Generate CODE128A, CODE128 Generator, Code 128 Creator, code 128a, code128a",
          },
          rules: [
            "字符集：大写英文字母、数字、控制字符组成的字符串,比如:ABC、ABC123",
            "字符长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: a string of uppercase English letters, numbers, and control characters, such as: ABC, ABC123",
            "Length: variable length, theoretically unlimited limit",
          ],
          introduceList: [
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "在物流行业中，CODE128A因其对控制字符的支持，被广泛应用于包裹和快递的特殊标识和控制流程。通过使用控制字符，可以更灵活地管理物流流程和跟踪包裹信息。例如，可以使用控制字符标识特殊处理要求，或用于设定物流设备的操作流程，提高流程控制的灵活性和精准性。",
              en_text:
                "In the logistics sector, CODE 128 A barcodes are essential for the unique identification and management of parcels and express deliveries, made possible by their compatibility with control characters. These characters enable a more adaptable approach to logistics operations and the monitoring of parcel data. Control characters, for instance, can specify particular handling instructions or configure the workflow of logistics machinery, enhancing the adaptability and exactness of process governance.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
            {
              title: "工业生产",
              en_title: "Industrial Production",
              text: "在工业生产中，CODE128A常用于设备操作和控制，以控制字符为设备发送特定指令，实现自动化生产和精确控制。例如，可以用来标识工序的开始和结束，或是表示设备的操作状态，从而帮助提升生产效率和产品质量。",
              en_text:
                "In manufacturing, CODE 128 A plays a pivotal role in the automation and regulation of equipment, utilizing control characters to dispatch exact commands. This facilitates not only automated manufacturing processes but also stringent precision in control. It's utilized for denoting the commencement and conclusion of operations, or displaying the current state of machinery, thereby bolstering efficiency and the caliber of products.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Industrial production.png",
            },
            {
              title: "医疗行业",
              en_title: "Medical Industry",
              text: "在医疗行业中，CODE128A可用于标识医疗设备和仪器的特殊指令，提高设备使用的效率和准确性。比如，对于复杂的医疗设备，可以使用控制字符设定设备的操作流程，或是表示设备的工作状态，帮助医护人员更精确、有效地使用医疗设备。",
              en_text:
                "In healthcare, CODE 128 A barcodes are instrumental for coding specific instructions for medical apparatus and tools, thus heightening the precision and efficiency of their usage. For intricate medical machinery, control characters can delineate operational protocols or reflect the device's functional state, which aids healthcare professionals in the proficient and precise application of medical technology.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical industry.jpg",
            },
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "虽然在零售领域不如B、C类型常见，但CODE128A仍可用于特殊商品标识和管理，以满足某些特殊需求。例如，对于包含特殊字符的商品编码，或是需要包含特殊控制信息的商品，都可以选择使用CODE128A。",
              en_text:
                "While CODE 128 A may not be as prevalent as types B and C in the commercial arena, it remains a viable option for the identification and administration of goods with unique requisites. This format is apt for encoding merchandise with distinctive characters or for items necessitating specific control data, providing a tailored solution for complex retail scenarios.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE128B",
          url: 'code-128-b',
          type: "CODE128B",
          codeType: "BarCode",
          img:  "./img/code/CODE128B.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              " Free Code128B Generator - Online Error-free Barcode Generator",
            description:
              "Free Code128B Barcode Generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.  Code 128B is Perfect for encoding text and numbers in various industries. ",
            keywords:
              "CODE128B Generator, CODE128B, Barcode Generator Code 128 B",
          },
          rules: [
            "字符集：大小写英文字母、数字、字符组成的字符串,比如:Abc123、A-123(B)",
            "字符长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: a string of uppercase and lowercase English letters, numbers, and characters, such as: Abc123, A-123(B)",
            "Length: variable length, theoretically unlimited limit",
          ],
          introduceList: [
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "在物流行业中，CODE128B因其支持字母和数字，被广泛应用于物流包裹和快递的跟踪。每个包裹都有一个唯一的CODE128B条码，提高了包裹管理的效率和准确性。不仅如此，扫描CODE128B条码可以快速获取包裹的详细信息，比如发货地、目的地、重量和体积等，从而提高了整体的物流效率和服务质量。",
              en_text:
                "In logistics, CODE 128 B is extensively utilized for tracking parcels and deliveries, thanks to its alphanumeric support. Every parcel is assigned a distinct CODE128B barcode, enhancing package administration's precision and efficiency. Moreover, a quick scan of the CODE128B barcode reveals vital details like the package's point of origin, destination, weight, and dimensions, thereby bolstering logistics performance and customer service.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "在零售领域，CODE128B用于商品的标识，提升了库存管理的效率和准确性。每个商品都有一个独特的CODE128B条码，可以迅速获取商品的详细信息，如价格、生产日期、保质期等。这大大加快了商品的出入库、销售和库存盘点等环节的效率，提升了整体的零售效率。",
              en_text:
                "In the retail industry, CODE 128 B is employed to tag goods, streamlining and refining inventory control. Every product is marked with a distinctive CODE128B barcode, swiftly conveying essential details like cost, production date, and expiration. This expedites warehouse logistics, sales processes, and stocktaking, enhancing the retail workflow.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "医疗行业",
              en_title: "Medical Industry",
              text: "在医疗行业中，CODE128B用于标识和跟踪药品和医疗设备。每个药品和医疗设备都有一个唯一的CODE128B条码，提高了管理效率。而且，通过扫描条码，可以快速获取药品和设备的详细信息，如生产日期、有效期、使用说明等，方便医护人员快速准确地获取信息，提高医疗效率。",
              en_text:
                "Within healthcare, CODE 128 B facilitates the cataloging and monitoring of medicines and medical apparatus. Every drug and piece of equipment bears a unique CODE128B barcode, optimizing managerial tasks. Scanning these barcodes yields comprehensive data, such as manufacturing and expiry dates, usage guidelines, etc., enabling healthcare providers to access information swiftly and enhance care delivery.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical industry.jpg",
            },
            {
              title: "图书馆和教育",
              en_title: "Libraries And Education",
              text: "在图书馆和教育机构中，CODE128B常用于图书、教材和其他教学资料的标识和管理。通过条码，可以快速获取图书的相关信息，如出版日期、作者等，方便读者查阅。同时，图书馆员也可以通过扫描条码，快速进行图书的入库、借出和归还等操作，提升图书馆管理的效率。",
              en_text:
                "CODE 128 B barcodes are a staple in libraries and educational settings for managing resources like books and educational aids. These barcodes give instant access to important information about the resources, including publication dates and authorship, aiding patrons in their research. Librarians benefit too, as they can expedite routine tasks like check-ins, loans, and returns, thus enhancing the institution's operational efficacy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Libraries and education.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE128C",
          url: 'code-128-c',
          type: "CODE128C",
          codeType: "BarCode",
          img:"./img/code/CODE128C.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "CODE128C Barcode Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online CODE128C Barcode Generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.  Code 128 C is a variant of the Code 128 barcode standard, which is highly versatile and widely used in logistics and transportation, retail, and healthcare for labeling and tracking purposes. ",
            keywords: "CODE128C Barcode, Quick Barcode Generator",
          },
          rules: [
            "字符集：仅可表示100个“两位”数字编码(00-99),比如:123456、00225869。如果是奇数，生成条码时自动在前面加0",
            "字符长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: can only represent 100 'two-digit' numeric codes (00-99), such as: 123456, 00225869. If it is an odd number, automatically add 0 to the front when generating the barcode",
            "Length: variable length, theoretically unlimited limit",
          ],
          introduceList: [
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "CODE128C以两个数字为单位进行编码，因此在包裹和运单号码的编码中效率较高，广泛应用于物流领域。对于包含大量数字的运单号或追踪号，使用CODE128C可以大大提升编码效率和准确性，从而提升了整体的物流效率。",
              en_text:
                "CODE 128 C is encoded in units of two numbers, so it is more efficient in the coding of parcel and waybill numbers, and is widely used in the logistics field. It enhances the encoding process for waybills and tracking numbers laden with digits, boosting both precision and efficiency in logistics operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "在零售领域，CODE128C可用于编码包含大量数字的商品信息，如数量和价格等。这使得商品的出入库、销售和库存盘点等环节更加快速和准确，大大提升了零售效率。",
              en_text:
                "In the retail sector, CODE 128 C is ideal for encoding numerically intensive product information, like quantities and pricing. Its application streamlines processes from stock receipt to sales and inventory audits, ensuring rapidity and precision that significantly elevate retail productivity.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "金融行业",
              en_title: "Financial Industry",
              text: "在金融领域，CODE128C可用于账户和交易凭证的编码，确保了金融操作的准确性和安全性。对于包含大量数字的银行账户号、交易凭证号等，使用CODE128C可以提高编码的效率和准确性，提升金融服务的效率和安全性。",
              en_text:
                "In finance, CODE 128 C is adept at encoding numerical account details and transaction records, bolstering both the precision and security of financial transactions. Its application to number-dense items like bank accounts and transaction vouchers refines coding accuracy and operational efficiency, reinforcing the integrity and swiftness of financial services.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Financial industry.png",
            },
            {
              title: "交通管理",
              en_title: "Traffic Management",
              text: "在交通管理中，CODE128C可用于车票和通行证的编码，提高了交通运输服务的效率和准确性。比如，对于包含大量数字的车票号、通行证号等，使用CODE128C可以提高编码的效率和准确性，从而提高通行和检票的效率，提升整体的交通运输服务质量。",
              en_text:
                "Traffic systems employ CODE 128 C for encoding transit tickets and passes, enhancing service efficiency and accuracy. Utilizing CODE128C for items with extensive numerical information like ticket and pass numbers augments encoding precision and speed, thus facilitating smoother transit and validation processes and elevating the caliber of transportation offerings.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Traffic management.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE11",
          url: 'code-11',
          type: "CODE11",
          codeType: "BarCode",
          img: "./img/code/CODE11.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "CODE 11 Barcode Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online CODE11 Barcode Generator: Generate CODE11 barcodes widely used in telecommunications.  Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "CODE 11, CODE11 Barcode generator, Telecommunication Barcode, Easy Barcode Generation",
          },
          rules: [
            "字符：数字0-9和连字符‘-’",
            "字符长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Characters: numbers 0-9 and hyphens '-'",
            "Length: variable length, theoretically unlimited limit",
          ],
          introduceList: [
            {
              title: "电信行业",
              en_title: "Telecommunications Industry",
              text: "CODE11条码在电信行业中的应用广泛，主要用于设备的标识和跟踪。每个交换机、路由器或服务器都有一个唯一的CODE11条码，这有助于准确地识别和管理设备。",
              en_text:
                "CODE 11 barcodes are widely used in the telecommunication sector for the precise identification and tracking of equipment. Every switch, router, and server is assigned a unique CODE11 barcode, enabling meticulous device management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Telecommunications industry.jpg",
            },
            {
              title: "库存管理",
              en_title: "Inventory Management",
              text: "CODE11条码可以用于库存的标识和管理，例如仓库、超市、商场等。通过扫描CODE11条码，可以快速识别商品的信息，例如商品的名称、规格、生产日期、批次等信息，有助于提高库存管理的效率和准确性。",
              en_text:
                "CODE 11 barcode can be used for inventory identification and management, such as warehouses, supermarkets, shopping malls, etc. Scanning a CODE11 barcode yields rapid access to product details like name, specs, production date, and batch, enhancing inventory precision and efficiency.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Shipment tracking.png",
            },
            {
              title: "物流配送",
              en_title: "Logistics And Distribution",
              text: "CODE11条码可以用于物流配送的追踪和管理，例如快递、运输等。通过扫描CODE11条码，可以快速识别货物的信息，例如货物的来源、目的地、运输方式、运输时间等信息，有助于提高物流配送的效率和可靠性。",
              en_text:
                "CODE 11 barcodes streamline logistics by aiding in the tracking and management of delivery and transport services. Scanning the barcode reveals vital data on cargo, including its origin, destination, and transit details, thus boosting the logistics network's efficiency and dependability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and distribution.jpg",
            },
            {
              title: "生产管理",
              en_title: "Production Management",
              text: "CODE11条码可以用于生产线的自动化管理，例如工厂、车间等。通过扫描CODE11条码，可以快速识别生产线的信息，例如生产线的设备、工序、生产时间等信息，有助于提高生产线的效率和质量。",
              en_text:
                "Barcode CODE 11 can be used for the automatic management of production lines, such as factories, workshops, etc. Scanning them provides instant insights into production line specifics, from equipment to process timelines, augmenting both the line's efficiency and output quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Industrial production.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE39",
          url: 'code-39',
          type: "CODE39",
          codeType: "BarCode",
          img:  "./img/code/CODE39.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free CODE39 Barcode Generator: Online Error-free Barcode Generator",
            description:
              "Free Online Code 39 Generator: Create CODE39 barcodes suitable for various industries using our free online barcode maker. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "CODE39 Barcode, Free Barcode Creator, Generate CODE39, code 39 barcode maker",
          },
          rules: [
            "字符集：数字0-9及A-Z 大写字母和‘/’，‘+’，‘%’，‘$’，‘-’，‘.’及空格",
            "长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: numbers 0-9 and A-Z uppercase letters and '/','+','%','$','-','.' and spaces",
            "Length: variable length, theoretically unlimited limit",
          ],
          introduceList: [
            {
              title: "汽车制造",
              en_title: "Automobile Manufacturing",
              text: "在汽车行业，CODE39条形码广泛用于零件的识别和跟踪。每个零件都有一个唯一的CODE39条形码，有助于准确跟踪零件的生产，组装和质量控制。这种精确的跟踪可以帮助制造商提高生产率，减少错误，并确保汽车的质量。",
              en_text:
                "CODE 39 barcode is integral to the automotive sector for part identification and lineage tracking. Every component bears a unique CODE 39 to monitor its manufacture, assembly, and quality assurance, substantially elevating production efficiency and vehicular standards.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "电子行业",
              en_title: "Electronics Industry",
              text: "在电子工业中，CODE39条形码用于识别和跟踪电子元件和产品。每个电子元件和产品都有一个唯一的CODE39条形码，这有助于提高库存管理的效率和准确性。此外，通过扫描CODE39条形码，可以快速获得有关组件和产品的详细信息，例如制造日期，批号和规格。",
              en_text:
                "CODE 39 barcodes serve the electronics field by pinpointing and tracking components and finished goods. Each item is marked with a distinctive CODE39, sharpening inventory control effectiveness and precision. Scans deliver comprehensive data on items, from production batches to technical specs.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Electronics industry.jpg",
            },
            {
              title: "工业自动化",
              en_title: "Industrial Automation",
              text: "在工业自动化领域，CODE39条码被用于标识和跟踪设备和零部件。每个设备和零部件都有一个唯一的CODE39条码，这有助于设备的维护和故障排查。通过扫描设备或零部件上的CODE39条码，可以快速获取其使用状态、维护记录和故障信息，从而提高设备的运行效率和可靠性。",
              en_text:
                "CODE 39 barcodes are a mainstay in industrial automation for cataloging and monitoring machinery and parts. Unique CODE39 labels on each item streamline maintenance and diagnostics. Scanning these barcodes unveils usage, service history, and fault data, bolstering operational efficacy and dependability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Automation equipment manufacturing.png",
            },
            {
              title: "物流和仓储",
              en_title: "Logistics And Warehousing",
              text: "在物流和仓储行业中，CODE39条码被用于标识和跟踪货物。每个货物都有一个唯一的CODE39条码，这有助于提高货物管理的效率和准确性。此外，通过扫描货物上的CODE39条码，可以快速获取货物的详细信息，如货物的来源、目的地、重量和体积等，从而提高物流和仓储的效率。",
              en_text:
                "Within logistics and storage sectors, 39 CODE is pivotal for goods identification and oversight. A singular CODE39 on each consignment elevates cargo handling precision and speed. Scanning these labels provides instant access to comprehensive cargo metrics, from origin to size, refining the efficiency of logistics operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and warehousing.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE39Extended",
          url: 'code-39-extended',
          type: "CODE39Extended",
          codeType: "BarCode",
          img:  "./img/code/CODE39Extended.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free 3 of 9 Extended Barcode Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online CODE 39 Extended Barcode Generator: Generate extended CODE 39 barcodes that include the full ASCII character set. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "free 3 of 9 extended, CODE39 Extended, ASCII Barcode Generator, Free Online Barcode, Downloadable Barcodes",
          },
          rules: ["字符集：ASCII全字符集", "长度：长度可变，理论上无上限"],
          en_rules: [
            "Character: ASCII full character set",
            "Length: The length is variable, theoretically unlimited and unlimited",
          ],
          introduceList: [
            {
              title: "文档管理",
              en_title: "Document Management",
              text: "在各种需要文档管理的行业中，如法律、金融、教育等，CODE39Extended条码被广泛用于标识和跟踪文档。每个文档都有一个唯一的CODE39Extended条码，这有助于提高文档管理的效率和准确性。",
              en_text:
                "CODE 39 Extended barcodes are extensively employed in sectors like legal, financial, and educational for document control. They tag each document uniquely, enhancing both the management process's speed and its accuracy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Document management.png",
            },
            {
              title: "仓储管理",
              en_title: "Warehouse Management",
              text: "在仓储管理行业中，CODE39Extended条码被用于标识和跟踪存储物品，包括库存数量、位置等信息，使得仓库管理员能够有效地管理库存，提高仓库的运营效率。",
              en_text:
                "CODE 39 Extended barcodes facilitate the tracking and cataloging of inventory in warehouses, capturing data such as stock levels and placement. This enables managers to adeptly oversee inventory, optimizing warehouse operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce management.png",
            },
            {
              title: "航空行业",
              en_title: "Aviation Industry",
              text: "在航空行业中，CODE39Extended条码被用于行李处理和航班信息管理。它可以编码大量的信息，包括乘客信息、行李重量和目的地等，有助于提高航班的运营效率和乘客的旅行体验。",
              en_text:
                "CODE 39 Extended barcodes in aviation streamline luggage management and flight data operations. Capable of holding extensive details like traveler IDs, luggage specifics, and endpoints, they enhance both flight logistics and the passenger experience.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Document management (2).png",
            },
            {
              title: "医疗行业",
              en_title: "Medical Industry",
              text: "CODE39Extended条码在医疗行业中具有广泛的应用前景，可以用于药品、医疗器械、病历、患者的标识和管理，有助于提高医疗服务的质量和效率，保障患者的安全和权益。",
              en_text:
                "The medical field finds promising applications for CODE 39 Extended barcodes, from drug and device tracking to patient record management. Their usage promises higher service quality, operational efficiency, and patient safety and rights protection.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical industry.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE39_Mod43",
          url: 'code-39-mod-43',
          type: "CODE39_Mod43",
          codeType: "BarCode",
          img:  "./img/code/CODE39_Mod43.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free Code 39 Mod 43 Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online Code 39 Mod 43 Generator. Code 39 Mod 43 adds an extra layer of data verification to the standard Code 39 barcode through a modulo 43 check digit. This feature makes it suitable for applications where data accuracy is a priority, although it does come with the trade-off of increased barcode length and a limited character set compared to other barcode types. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.",
            keywords:
              "CODE 39 Mod 43, code 39 mod 43 generator, Instant Barcode Generator",
          },
          rules: [
            "字符集：数字0-9及A-Z 大写字母和‘/’，‘+’，‘%’，‘$’，‘-’，‘.’及空格",
            "长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: The numbers 0-9 and A-Z uppercase letters and '/','+','%','$','-','.' and spaces",
            "Length: The length is variable, theoretically unlimited and unlimited",
          ],
          introduceList: [
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "CODE39_Mod43被用于商品标签和价格标签。商店可以使用这种条码来追踪库存，快速扫描商品信息并进行销售记录。",
              en_text:
                "Retailers implement CODE39Mod43 barcodes on product and price tags to monitor stock, expedite product data retrieval, and record sales efficiently.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "物流和运输业",
              en_title: "Logistics And Transportation Industry",
              text: "物流公司使用CODE39_Mod43条码来追踪包裹和货物的运输信息。这有助于实现货物的精确配送和在运输过程中的可视化跟踪。",
              en_text:
                "CODE39_Mod43 barcodes are integral to logistics firms for tracing parcel and freight shipment details, ensuring accurate goods distribution and real-time transit visualization.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and distribution.jpg",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业中，CODE39_Mod43条码通常用于标识产品、追踪零部件和生产过程。它们可以用于管理整个生产流程，并确保产品的质量和追溯性。",
              en_text:
                "In manufacturing, CODE39_Mod43 barcodes are often used to identify products",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "医疗保健",
              en_title: "Healthcare",
              text: "在医疗领域，CODE39_Mod43条码广泛用于标记药品、病患信息和医疗器械。它有助于减少医疗错误，提高病患安全性。",
              en_text:
                "The medical sector relies on CODE39_Mod43 barcodes for labeling medications, recording patient data, and tracking medical instruments, instrumental in minimizing errors and enhancing patient care safety.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Healthcare.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "CODE93",
          url: 'code-93',
          type: "CODE93",
          codeType: "BarCode",
          img:  "./img/code/CODE93.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free CODE93 Barcode Generator: Online Error-free Barcode Maker",
            description:
              "Free Online CODE93 Barcode Generator: Create CODE93 barcodes known for their compactness and security features. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.",
            keywords:
              "CODE93 Barcode Maker, Secure Barcode Generator, Compact Barcodes, Free Tool",
          },
          rules: [
            "字符集：数字0-9及A-Z、 a-z大小写字母和‘/’，‘+’，‘%’，‘$’，‘-’，‘.’及空格",
            "长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: The numbers 0-9 and A-Z, a-z uppercase and lowercase letters and '/','+','%','$','-','.' and spaces",
            "Length: The length is variable, theoretically unlimited and unlimited",
          ],
          introduceList: [
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "物流行业对条码的需求极高，CODE93条码因其高密度和可变长度的特性，被广泛应用于包裹和快递的跟踪。通过扫描包裹上的CODE93条码，可以快速获取包裹的详细信息，如发货地、目的地、重量和体积等，从而提高物流效率。",
              en_text:
                "The logistics sector's need for barcodes is profound, with CODE 93 barcodes being particularly prevalent in tracking parcels and express deliveries due to their high density and adjustable length. Scanning a package's CODE93 barcode yields instant access to detailed data like shipment origin, destination, weight, and size, thereby streamlining logistical operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "在零售领域，每个商品都会配备独特的CODE93条码，这种做法极大地提升了库存管理的效率和准确性。更重要的是，扫描商品上的CODE93条码，能迅速获取商品的详细信息，如价格、生产日期、保质期等，从而极大地提升了零售效率。",
              en_text:
                "In retail, each item is equipped with a unique CODE 93 barcode, which greatly improves the efficiency and accuracy of inventory Scanning a product's CODE93 barcode provides immediate access to comprehensive details like price, manufacture date, and expiration, thus boosting retail operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "医疗行业",
              en_title: "Medical Industry",
              text: "在医疗行业中，CODE93条码常被用于标识和跟踪药品和医疗设备。通过扫描CODE93条码，可以快速获取其详细信息，如生产日期、有效期、使用说明等，从而提高医疗效率。",
              en_text:
                "In healthcare, barcode Code 93 is routinely employed to label and monitor medications and medical equipment. Scanning these barcodes reveals essential details like production and expiry dates, along with usage instructions, facilitating increased efficiency in medical services.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical industry.jpg",
            },
            {
              title: "制造行业",
              en_title: "Manufacturing Industry",
              text: "在制造领域，CODE93条码在零部件和产品的标识和跟踪方面发挥了关键作用。通过扫描零部件或产品上的CODE93条码，能迅速获取其详细信息，如生产日期、批次号和规格等，从而极大地提高了生产效率。",
              en_text:
                "CODE 93 barcodes are crucial in manufacturing for pinpointing and tracking components and finished goods. A quick scan delivers vital specifics, such as production dates, batch numbers, and specifications, thereby enhancing production workflow.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Codabar",
          url: 'codabar',
          type: "Codabar",
          codeType: "BarCode",
          img:  "./img/code/Codabar.png",
          defaultValue: "A123456789A",
          buildLocally: false,
          head: {
            title:
              "Free Codabar Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online Codabar Generator: Codabar is a simple, versatile barcode symbology suitable for applications requiring straightforward numeric and limited-symbol encoding. Its ease of use and printing make it a popular choice for library, healthcare, and package tracking applications. Make Codabar online for free. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.",
            keywords:
              "Codabar Barcode, Library Barcode Maker, Blood Bank Barcode, Generate Codabar",
          },
          rules: [
            "字符集：数字0-9及'A'，'B'，'C'，'D'，'-'，'.'，'/'，':'，'+'，'$'，开始和结尾字符必须是'A'，'B'，'C'，'D'中的字符",
            "长度：理论上无上限",
          ],
          en_rules: [
            "Character: The numbers 0-9 and 'A', 'B', 'C', 'D', '-','.', '/',':', '+', '$', the opening and ending characters must be 'A', 'B', 'C', 'D'",
            "Length: Theoretically there is no upper limit",
          ],
          introduceList: [
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "Codabar条码被广泛应用于物流行业，特别是在联邦快递中，用于包裹的追踪和管理。Codabar条码的自检特性使其成为物流行业的理想选择，能够有效地提高包裹处理的效率和准确性。",
              en_text:
                "Codabar barcodes, known for their self-verification feature, are prevalent in logistics, particularly for FedEx's parcel tracking and management, leading to more efficient and precise handling of shipments.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
            {
              title: "医疗保健行业",
              en_title: "Healthcare Industry",
              text: "Codabar条形码在医疗保健行业也有广泛的应用，特别是在美国的血库中。Codabar条形码用于识别和跟踪血液样本，确保血液的安全和准确分配。",
              en_text:
                "In the U.S. healthcare sector, Codabar barcodes are extensively utilized, especially for cataloging and monitoring blood samples in blood banks, guaranteeing their safe and precise allocation.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "图书馆",
              en_title: "Library",
              text: "在图书馆中，Codabar条码被用于对图书和其他资料的标识和管理。Codabar条码的易打印性使其成为图书馆的优选，可以显著提高图书管理的效率。",
              en_text:
                "Libraries employ Codabar barcodes for cataloging and overseeing books and resources. Their print-friendly design renders them ideal for library systems, substantially boosting management efficiency.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Library.png",
            },
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "Codabar条码在零售行业中也有一定的应用，尤其是在需要生成和打印大量条码的场合。Codabar条码的自检特性和易打印性使其在零售行业中得到了广泛的应用。",
              en_text:
                "In retail settings, Codabar barcodes are particularly useful when mass barcode production and printing are required. Their inherent self-checking ability and printability have led to their extensive adoption in the sector.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "Interleaved 2 of 5",
          url: 'interleaved-2-of-5',
          type: "Interleaved2of5",
          codeType: "BarCode",
          img:  "./img/code/Interleaved2of5.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free Interleaved 2 of 5 Barcode Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online Interleaved 2 of 5 (ITF)  Barcode Generator: Generate Interleaved 2 of 5 (ITF) barcodes for warehousing and logistics with our free online tool. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.",
            keywords:
              "Interleaved 2 of 5 Barcode, ITF Generator, Free Numerical Barcode, Online Barcode Tool",
          },
          rules: ["字符集：数字0-9", "字符长度：偶数长度"],
          en_rules: ["Character: Numbers 0-9", "Length: Even length"],
          introduceList: [
            {
              title: "物流供应链",
              en_title: "Logistics Supply Chain",
              text: "Interleaved2of5条码广泛应用于物流供应链中，尤其是在瓦楞纸箱的标识上。通过条码，可以方便地对货物进行分类和追踪，提高物流效率。",
              en_text:
                "The logistics supply chain heavily relies on Interleaved2of5 barcodes, particularly for labeling corrugated boxes. These barcodes simplify the classification and tracking of goods, thereby enhancing logistic operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "仓储管理",
              en_title: "Warehouse Management",
              text: "在仓储管理中，Interleaved2of5条码也有重要的应用。通过对仓库内的货物进行条码标识，可以方便地进行库存管理和货物出入库的记录。",
              en_text:
                "Interleaved2of5 barcodes are crucial in warehouse management. They streamline inventory control and facilitate the tracking of stock movements, optimizing warehouse operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce management.png",
            },
            {
              title: "零售业",
              en_title: "Retail",
              text: "在零售业中，商家可以通过对商品进行Interleaved2of5条码标识，方便在商品的销售和库存管理中进行数据记录。",
              en_text:
                "Retailers utilize Interleaved 2of5 barcodes for efficient data capture in sales and inventory tracking, aiding in the seamless management of merchandise.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
            {
              title: "包装行业",
              en_title: "Packaging Industry",
              text: "在包装行业，Interleaved2of5条码也有一定的应用。通过对包装上的条码进行扫描，可以方便地获取到商品的相关信息，如生产日期、保质期等。",
              en_text:
                "The packaging sector benefits from 2 5 interleaved barcode, which allow quick access to product details like manufacturing dates and expiration upon scanning.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Packaging industry.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "Standard2of5",
          url: 'standard-2-of-5',
          type: "Standard2of5",
          codeType: "BarCode",
          img:  "./img/code/Standard2of5.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title: "Standard(Industrial) 2 of 5 Barcode Generator Online",
            description:
              "Free Standard 2 of 5(Industrial 2 of 5) Barcode Generator: Create Standard 2 of 5 barcodes, ideal for inventory and airline ticketing, with our simple online generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG.",
            keywords:
              "Industrial 2 of 5, Standard 2 of 5 Barcode, Online Barcode Maker, Free Barcode Generator",
          },
          rules: ["字符集：数字0-9", "字符长度：可变"],
          en_rules: ["Character: Numbers 0-9", "Length: Variable"],
          introduceList: [
            {
              title: "仓储物流",
              en_title: "Warehousing Logistics",
              text: "在仓储物流行业，Standard2of5条码扮演着重要的角色。它的主要用途是标识纸箱或木箱，以实现对商品的精准分类和高效分拣。",
              en_text:
                "Standard 2of5 barcode is pivotal in warehousing and logistics for the precise identification and streamlined sorting of cartons and crates.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and warehousing.jpg",
            },
            {
              title: "零售业",
              en_title: "Retail",
              text: "Standard2of5条码在零售业中的应用也不可忽视。商家利用这种条码对商品进行编码，从而在配送和存储过程中提高分类和分拣的效率。",
              en_text:
                "Standard2of5 barcodes are integral in retail for encoding merchandise, which significantly boosts the sorting process throughout distribution and storage phases.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
            {
              title: "图书馆",
              en_title: "Library",
              text: "图书馆是Standard2of5条码的另一个应用场景。通过对书籍进行条码编码，图书馆能够更好地管理和存储各类书籍。",
              en_text:
                "Libraries frequently adopt Standard2of5 barcodes for cataloging books, which enhances the management and organization of diverse collections.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Library.png",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业中，Standard2of5条码同样发挥着重要作用。制造商通过对产品进行条码编码，可以在产品的生产和存储过程中实现更精准的分类和分拣。",
              en_text:
                "In manufacturing, Standard2of5 barcodes are critical, ensuring precision in product sorting and organization throughout production and warehousing.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "MSI_Mod10",
          url: 'msi-plessey',
          type: "MSI_Mod10",
          codeType: "BarCode",
          img:  "./img/code/MSI_Mod10.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free MSI Plessey (MSI_Mod10) Barcode Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free MSI Plessey (MSI_Mod10) Barcode Generator: Generate MSI Plessey barcodes for retail and libraries with our free generator. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "MSI Plessey Barcode, Free Barcode Maker, Generate MSI Code, Online Barcode Creator",
          },
          rules: ["字符集：数字0-9", "字符长度：理论上无上限"],
          en_rules: [
            "Character: Numbers 0-9",
            "Length: Theoretically there is no upper limit",
          ],
          introduceList: [
            {
              title: "超市",
              en_title: "Supermarket",
              text: "MSI/Plessey条码最早由英国的Plessey公司在20世纪70年代开发，最初用于标记超市的货架。这种条码可以提供关于货架上产品、应放数量和其他相关信息，帮助超市进行有效的商品管理。",
              en_text:
                "MSI/Plessey barcodes were first developed by Plessey in the UK in the 70s of the 20th century and were originally used to mark supermarket shelves. This barcode can provide information about the products on the shelf, the quantity that should be put and other relevant information, helping supermarkets to manage goods effectively.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Supermarket.jpg",
            },
            {
              title: "存储仓库",
              en_title: "Storage Warehouse",
              text: "MSI/Plessey条码也广泛应用于存储仓库，用于标记存储容器和货架。通过扫描这种条码，仓库管理人员可以快速获取关于存储物品的信息，提高仓库管理的效率。",
              en_text:
                "MSI/Plessey barcodes are also widely used in storage warehouses to mark storage containers and shelves. By scanning this barcode, warehouse managers can quickly obtain information about stored items, improving the efficiency of warehouse management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Storage warehouse.jpg",
            },
            {
              title: "图书馆",
              en_title: "Library",
              text: "MSI条码也在图书馆得到应用。图书馆可以通过这种条码快速获取书籍的信息，方便图书的管理和借阅。",
              en_text:
                "MSI barcodes are also used in libraries. Libraries can quickly obtain book information through this barcode, which is convenient for book management and borrowing.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Library.png",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业中，微星/普莱西条码也有一定的应用。例如，它可用于标记零件，以帮助制造商跟踪零件的生产和流通。",
              en_text:
                "In the manufacturing industry, MSI/Plessey barcodes also have certain applications. For example, it can be used to tag parts to help manufacturers track the production and circulation of parts.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "PHARMACODE",
          url: 'pharmacode',
          type: "PHARMACODE",
          codeType: "BarCode",
          img:  "./img/code/PHARMACODE.png",
          defaultValue: "123",
          buildLocally: false,
          head: {
            title: "Free Pharmacode Generator: Online Error-free Barcode Maker",
            description:
              "Free Pharmacode Barcode Generator: Pharmaceutical Binary Code is a barcode standard used specifically in the pharmaceutical industr. It is designed to ensure the safe and precise identification of pharmaceutical products, particularly in the packaging process. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "Pharmacode Generator, Pharmaceutical Barcode, Medical Barcode Maker, pharmacode software",
          },
          rules: [
            "字符集：数字0-9，只能输入3~131070之间的整数",
            "字符长度：可变",
          ],
          en_rules: [
            "Character: Numbers 0-9, only integers between 3~131070 can be entered",
            "Length: Variable",
          ],
          introduceList: [
            {
              title: "制药生产线",
              en_title: "Pharmaceutical Production Lines",
              text: "PHARMACODE条码在制药生产线上发挥着重要的作用。由于其独特的编码方式，PHARMACODE条码能够在可能存在印刷或打印错误的情况下保障可读性，确保药品生产过程中的信息准确无误。",
              en_text:
                "PHARMACODE barcodes are crucial in pharmaceutical production. Their unique encoding ensures readability, even with potential print errors, guaranteeing the precision of information throughout the drug manufacturing process.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical production lines.png",
            },
            {
              title: "药品包装",
              en_title: "Pharmaceutical Packaging",
              text: "PHARMACODE条码常被用于药品包装，尤其是那些包装面积较小，无法显示完整EAN或UPC条码的药品。PHARMACODE条码的紧凑设计使其成为这些场景的理想选择。",
              en_text:
                "PHARMACODE barcodes are ideal for medication packaging with limited space, unable to accommodate full EAN or UPC codes. Their compact nature makes them the go-to for such applications..",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical packaging.png",
            },
            {
              title: "药品质量控制",
              en_title: "Pharmaceutical Quality Control",
              text: "在药品质量控制过程中，PHARMACODE条码可以提供准确的药品信息，帮助质量控制人员追踪药品的生产批次，从而有效地进行质量管理和控制。",
              en_text:
                "In drug quality assurance, PHARMACODE barcodes deliver exact medication details, assisting quality inspectors in tracking production lots, thus facilitating robust quality management",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical quality control.png",
            },
            {
              title: "药品物流",
              en_title: "Pharmaceutical Logistics",
              text: "在药品的物流过程中，PHARMACODE条码可以提供精确的药品信息，帮助物流人员准确地追踪药品的流向，确保药品的安全运输。",
              en_text:
                "During drug logistics, PHARMACODE barcodes provide precise medication tracking information, aiding logistics staff in ensuring drugs are transported safely",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "TELEPEN",
          url: 'telepen',
          type: "TELEPEN",
          codeType: "BarCode",
          img:  "./img/code/TELEPEN.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free TELEPEN Barcode Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free TELEPEN Barcode Generator Online: Easily generate TELEPEN barcodes ideal for library systems and logistics with our free online tool. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "TELEPEN Barcode Generator, Free TELEPEN Barcode, Online Barcode Maker",
          },
          rules: [
            "字符集：大小写英文字母0~9数字和字符组成的字符串",
            "字符长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: A string of uppercase and lowercase English letters: 0~9 numbers and characters",
            "Length: The length is variable, theoretically unlimited and unlimited",
          ],
          introduceList: [
            {
              title: "信息技术服务",
              en_title: "Information Technology Services",
              text: "TELEPEN条码能够准确标识整个ASCII表，因此在信息技术服务行业中有广泛应用。例如，用于数据管理和信息编码，提供精确的数据跟踪和存储。",
              en_text:
                "TELEPEN barcodes, encoding the complete ASCII range, are extensively used in IT services for data management and encoding, allowing for accurate data tracking and retention.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Information Technology Services.png",
            },
            {
              title: "电子商务",
              en_title: "E-commerce",
              text: "在电子商务领域，TELEPEN条码可以用于商品的标识和分类，提高商品管理的效率和准确性。",
              en_text:
                "TELEPEN barcodes enhance e-commerce by enabling efficient identification and categorization of products, increasing management precision.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce (2).png",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业中，TELEPEN条码可以用于产品的标识和追踪，从而提高生产效率，减少错误。",
              en_text:
                "In the manufacturing sector, TELEPEN barcodes are utilized for product identification and monitoring, heightening production efficiency and minimizing errors",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "物流与仓储",
              en_title: "Logistics & Warehousing",
              text: "在物流与仓储行业，TELEPEN条码可以用于包裹和货物的标识，提高物流效率和准确性。",
              en_text:
                "TELEPEN barcodes are employed in logistics and warehousing for labeling parcels and goods, boosting both efficiency and accuracy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and warehousing.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1_128",
          url: 'gs1-128',
          type: "gs1-128",
          codeType: "BarCode",
          img:  "./img/code/GS1_128.png",
          defaultValue: "(01)09521234543213(3103)000123",
          buildLocally: true,
          head: {
            title:
              "Free GS1 128 (EAN 128) Barcode Generator: Online Error-free Barcode Maker",
            description:
              "Free GS1 128 (EAN 128) Barcode Generator: Generate GS1 128 (EAN 128) barcodes for supply chain management. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "gs1 128, GS1 128 Barcode Generator, EAN 128 Code Creator",
          },
          rules: ["字符集：数字0-9", "字符长度：长度可变，理论上无上限"],
          en_rules: [
            "Character: ",
            "Length: The length is variable, theoretically unlimited and unlimited",
          ],
          introduceList: [
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "GS1_128条形码用于对产品信息进行编码，例如全球贸易项目代码 （GTIN）、批号和有效期。它在库存管理系统中发挥着重要作用，通过供应链跟踪和管理产品。",
              en_text:
                "GS1_128 barcodes are used to encode product information such as Global Trade Item Codes (GTINs), lot numbers, and expiration dates. It plays an important role in inventory management systemsby facilitating product tracking across the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "医疗保健行业",
              en_title: "Healthcare Industry",
              text: "GS1_128条形码用于对患者信息、药物数据和医疗设备数据进行编码。在医院和药房系统中，它有助于改善患者安全和药物管理。",
              en_text:
                "GS1_128 barcodes are used to encode patient information, drug data, and medical device data. In hospital and pharmacy systems, it helps improve patient safety and medication management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "GS1_128条形码用于对运输信息进行编码，例如托运人身份、收货人身份、承运人身份等。在仓库和运输管理系统中，它有助于管理货物在供应链中的移动。",
              en_text:
                "GS1_128 barcodes are used to encode shipping information such as shipper identity, consignee identity, carrier identity, etc. In warehouse and transportation management systems, it helps manage the movement of goods through the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
            {
              title: "食品行业",
              en_title: "Food Industry",
              text: "GS1_128条码用于编码食品信息，如全球位置编号（GLN）、批号/批号、有效期和营养信息。在食品追溯系统中，它有助于管理食品安全和追踪产品来源。",
              en_text:
                "GS1_128 barcodes are used to encode food information such as Global Position Number (GLN), lot/lot number, expiration date, and nutritional information. In food traceability systems, it helps manage food safety and trace the origin of products.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Food industry.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "LOGMARS",
          url: 'logmars',
          type: "LOGMARS",
          codeType: "BarCode",
          img:  "./img/code/LOGMARS.png",
          defaultValue: "0123456789",
          buildLocally: false,
          head: {
            title:
              "Free LOGMARS Barcode Generator: Online Error-free Barcode Maker",
            description:
              "Free LOGMARS Barcode Generator: Create LOGMARS( (Logistics Applications of Automated Marking and Reading Symbols) barcodes, compliant with military standards, using our online generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "LOGMARS Barcode, Military Standard Barcode, military logmars",
          },
          rules: [
            "字符集：数字0-9及A-Z 大写字母和'/'，'+'，'%'，'$'，'-'，'.'及空格",
            "字符长度：长度可变，理论上无上限",
          ],
          en_rules: [
            "Character: The numbers 0-9 and A-Z uppercase letters and '/','+','%','$','-','.' and spaces",
            "Length: The length is variable, theoretically unlimited and unlimited",
          ],
          introduceList: [
            {
              title: "国防军事",
              en_title: "Defense Military",
              text: "LOGMARS条码最初由美国国防部开发，用于对大量敏感数据进行编码，如军用标准MIL-STD-1189B、MIL-STD-129、MIL-STD-2073-1C和MIL-STD-129N等。",
              en_text:
                "LOGMARS barcodes were originally developed by the U.S. Department of Defense to encode substantial volumes of confidential data, including military specifications like MIL-STD-1189B, MIL-STD-129, MIL-STD-2073-1C, and MIL-STD-129N.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Defense Military.jpg",
            },
            {
              title: "物流运输",
              en_title: "Logistics And Transportation",
              text: "在物流运输行业，LOGMARS条码也有一定的应用。通过对包裹的目的地邮编进行编码，可以方便地进行包裹的分类和分拣。",
              en_text:
                "LOGMARS barcodes find their utility within the logistics and transport sector, streamlining the categorization and organization of packages through the encoding of destination postal codes.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and distribution.jpg",
            },
            {
              title: "仓储管理",
              en_title: "Warehouse Management",
              text: "在仓储管理领域，LOGMARS条码可以用于对仓库内的物品进行编码，方便在物品的存储和管理过程中进行分类和分拣。",
              en_text:
                "Within warehouse operations, LOGMARS barcodes are instrumental in item encoding, enhancing the efficiency of item segregation and inventory control.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce management.png",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业，尤其是汽车和铁路行业，LOGMARS条码可以用于对大量的零部件和产品进行编码，方便在生产和质量控制过程中进行追踪和管理。",
              en_text:
                "In the manufacturing realm, particularly for the automotive and railway sectors, LOGMARS barcodes are crucial for the encoding of myriad components and goods, bolstering the precision of tracking and oversight throughout production and quality assurance processes.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
          ],
          tutorial: [],
        },
      ],
    },
    {
      title: "EAN/UPC",
      en_title: "EAN/UPC",
      icon:  "./img/code/code-icon-2.png",
      children: [
        {
          title: "EAN8",
          url: 'ean-8',
          type: "EAN8",
          codeType: "BarCode",
          img:  "./img/code/EAN8.png",
          defaultValue: "0123456",
          buildLocally: false,
          head: {
            title:
              "Free EAN 8 Barcode Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free EAN8 Barcode Generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords: "EAN 8 Barcode Generator, generate ean 8 barcode",
          },
          rules: ["字符集：数字0-9，最后一位校验位要自动生成", "长度：8位"],
          en_rules: [
            "Character: The numbers 0-9, the last check digit is automatically generated",
            "Length: 8 bits",
          ],
          introduceList: [
            {
              title: "零售业",
              en_title: "Retail",
              text: "EAN8条码在零售业中的应用广泛，尤其是在超市和便利店中。由于其较短的长度，EAN8条码适用于标识面积较小的商品，如口香糖、化妆品等，能够有效地提供商品的详细信息。",
              en_text:
                "EAN8 barcodes enjoy widespread application across the retail sector, particularly within supermarkets and convenience outlets. Their compact size renders them ideal for labeling small-scale items like chewing gum and cosmetics, offering a means to convey comprehensive product details efficiently.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
            {
              title: "包装行业",
              en_title: "Packaging Industry",
              text: "在包装行业，EAN8条码的应用也十分重要。对于那些包装面积有限的商品，如一些小型化妆品、食品等，EAN8条码能在有限的空间内提供大量的商品信息，从而提高商品管理的效率。",
              en_text:
                "EAN8 barcodes hold significant importance in the packaging sector. They enable the encapsulation of extensive product data on the limited real estate of small-scale items, like select cosmetics and foodstuffs, enhancing the management efficiency of these commodities.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Packaging industry.jpg",
            },
            {
              title: "电子商务",
              en_title: "E-commerce",
              text: "在电子商务领域，EAN8条码也被广泛使用。商家只需扫描EAN8条码即可获取产品的详细信息，从而提高产品管理效率，使产品信息的获取更加方便。",
              en_text:
                "EAN8 barcodes are also prevalent in e-commerce. Retailers can swiftly access detailed product specifications with a simple scan, streamlining product management and simplifying data retrieval.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce (2).png",
            },
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "在物流行业中，EAN8条码的应用也十分重要。尤其是在处理小型包裹时，通过扫描EAN8条码，就能快速获取包裹的信息，从而提高物流效率。",
              en_text:
                "The logistics sector greatly benefits from EAN8 barcodes, particularly for swift information retrieval in small parcel processing, thus boosting operational efficiency.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "EAN13",
          url: 'ean-13',
          type: "EAN13",
          codeType: "BarCode",
          img:  "./img/code/EAN13.png",
          defaultValue: "2112345678917",
          buildLocally: false,
          head: {
            title: "Free EAN13 Generator: Online Error-free Barcode Maker",
            description:
              "Free EAN13 Barcode Generator: Generate EAN13 barcodes for retail products with our free and user-friendly online generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "EAN13 Generator, EAN13 Barcode Maker,  Free EAN13 Barcode",
          },
          rules: [
            "字符集：数字0-9，最后一位校验位要自动生成",
            "字符长度：13位",
          ],
          en_rules: [
            "Character: The numbers 0-9, the last check digit is automatically generated",
            "Length: 13 bits",
          ],
          introduceList: [
            {
              title: "零售业",
              en_title: "Retail",
              text: "EAN13是全球通用的商品条码，主要应用于超级市场和其他零售业。无论是我们在商场买的面纸、书本，还是化妆品，都可以从包装上看到EAN13条形码。这种条形码的输入速度快、准确度高、成本低、可靠性强，是我们日常生活中最常见的条形码。",
              en_text:
                "EAN13 is a global commodity barcode, mainly used in supermarkets and other retail industries. Whether it is facial paper, books, or cosmetics we buy in the mall, we can see the EAN13 barcode on the packaging. Renowned for its rapid scanning, precision, cost-effectiveness, and dependability, the EAN13 is an everyday staple in barcode technology.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "EAN13条形码凭借其全球通用性、组织性强、识别度高和扩展性好的特点，广泛应用于全球的物流行业。通过专业的标签条码打印软件，可以方便地生成和打印EAN13条形码，从而提高物流效率和准确性。",
              en_text:
                "The EAN13 barcode's universal design and scalable format make it indispensable in global logistics. Its ease of generation and printing via specialized software enhances logistical precision and efficiency.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "EAN13条形码的前3位数据是前缀码，用于表示商品的制造国家和地区，由EAN总部分配。这使得制造业可以通过EAN13条形码，快速准确地识别商品的来源，从而提高生产和供应链管理的效率。",
              en_text:
                "The first 3 digits of the EAN13 barcode serve as prefix codes, denoting the manufacturing country and region as allocated by the EAN headquarters. This feature enables manufacturers to pinpoint goods' origins with speed and precision, optimizing production and supply chain operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "信息技术业",
              en_title: "Information Technology Industry",
              text: "EAN13条形码的编码遵循唯一性原则，保证在全世界范围内不重复。这使得信息技术业可以利用EAN13条形码，实现商品和服务的全球唯一标识，从而提高信息管理的准确性和效率。",
              en_text:
                "EAN13 barcodes adhere to a unique encoding system, ensuring no global duplication. Such exclusivity permits the IT sector to uniquely identify products and services on a global scale, refining the precision and management of information flows.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Information Technology Services.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "JAN13",
          url: 'jan-13',
          type: "JAN13",
          codeType: "BarCode",
          img:  "./img/code/JAN13.png",
          defaultValue: "4912345678917",
          buildLocally: false,
          head: {
            title: "Free Online Barcode Generator: JAN13",
            description:
              "Free JAN13 Barcode Generator. JAN-13, or Japanese Article Numbering 13, is a barcode standard that is essentially a subset of the EAN-13 barcode system. It's specifically used in Japan and is very similar to the global EAN-13 standard, with some regional specificities.",
            keywords: "JAN13 Barcode Generator, ean jan 13",
          },
          rules: [
            "字符集：数字0-9，最后一位校验位要自动生成",
            "字符长度：13位",
          ],
          en_rules: [
            "Character: The numbers 0-9, the last check digit is automatically generated",
            "Length: 13 bits",
          ],
          introduceList: [
            {
              title: "零售业",
              en_title: "Retail",
              text: "JAN13条码是零售业的标准产品标识符，尤其在日本的超市和其他零售场所中应用广泛。每个商品都有一个独特的JAN13条码，方便收银员快速扫描并计算价格。",
              en_text:
                "The JAN13 barcode stands as the quintessential product marker within the Japanese retail landscape, extensively utilized in supermarkets and various retail outlets. It endows each item with a distinct JAN13 code, enabling swift scanning and price tallying by cashiers.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
            {
              title: "仓储物流",
              en_title: "Warehousing Logistics",
              text: "在仓储物流行业，JAN13条码也有广泛应用。通过扫描条码，可以迅速获取商品信息，提高仓库管理效率，减少错误。",
              en_text:
                "JAN13 barcodes are a staple in warehousing and logistics for their ability to instantaneously relay product data upon scanning, thereby streamlining warehouse operations and diminishing the margin of error.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and warehousing.jpg",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业中，JAN13条码用于标识产品，方便在生产线上追踪产品的流动，提高生产效率。",
              en_text:
                "In the manufacturing industry, JAN13 barcodes are used to identify products, facilitate the flow of products on the production line, and improve production efficiency.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "电子商务",
              en_title: "E-commerce",
              text: "在电子商务领域，JAN13条码用于商品的在线展示和交易。消费者可以通过扫描商品上的JAN13条码，快速获取商品信息，方便在线购物。",
              en_text:
                "Within e-commerce, JAN13 barcodes are instrumental for showcasing and transacting goods. Shoppers can effortlessly access product details by scanning the JAN13 code, streamlining the online purchasing experience.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "UPCA",
          url: 'upc-a',
          type: "UPCA",
          codeType: "BarCode",
          img:  "./img/code/UPCA.png",
          defaultValue: "614141999996",
          buildLocally: false,
          head: {
            title: "Free Online Barcode Generator: UPC-A",
            description:
              "Free Online UPC-A Barcode Generator: Generate UPC-A barcodes for retail products with our free online free barcode maker. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "UPC Codes,upc codes for products, UPC-A Barcode Generator, Free UPC-A Code, creating upc codes for products",
          },
          rules: ["字符集：数字0-9，最后一位校验位要自动生成", "长度：12位"],
          en_rules: [
            "Character: The numbers 0-9, the last check digit is automatically generated",
            "Length: 12 bits",
          ],
          introduceList: [
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "零售行业是UPCA条码的主要应用领域。无论是超市、便利店还是百货商场，几乎所有的商品都会贴有UPCA条码。这些条码包含了商品的唯一标识信息，通过扫描条码，可以快速获取商品的价格、库存等信息，大大提高了结账的效率。",
              en_text:
                "UPCA barcodes are predominantly utilized across the retail sector, from supermarkets to convenience and department stores, with nearly every product featuring a UPCA label. These barcodes encode exclusive product identifiers, allowing for instantaneous retrieval of pricing and stock details upon scanning, thereby significantly streamlining the checkout process.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "仓储物流",
              en_title: "Warehousing Logistics",
              text: "在仓储物流行业，UPCA条码也有广泛的应用。商品在仓库中的存储、出入库、配送等环节，都需要通过扫描UPCA条码来进行追踪和管理。这不仅可以提高物流效率，还可以减少错误和混淆。",
              en_text:
                "UPCA barcodes are a staple in warehouse and logistics operations for monitoring and managing goods through every phase, including storage, inventory, and distribution. Scanning these barcodes elevates logistical productivity and mitigates potential for error and misplacement.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics and warehousing.jpg",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业中，UPCA条码被用于标识生产的各种产品。每个产品都有唯一的一个UPCA条码，这有助于提高生产管理的效率和准确性。此外，通过扫描产品上的UPCA条码，可以快速获取产品的详细信息，如生产日期、批次号和规格等。",
              en_text:
                "In manufacturing, UPCA barcodes are essential for labeling diverse output. Unique to each product, these barcodes enhance management precision and operational throughput. Scanning them yields rapid access to product specifics, including manufacturing dates, batch codes, and dimensions.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "电子商务",
              en_title: "E-commerce",
              text: "在电子商务行业，UPCA条码被用于标识在线销售的商品。每个商品都有独特的UPCA条码标识，这有助于提高库存管理的效率和准确性。此外，通过扫描商品上的UPCA条码，可以快速获取商品的详细信息，如价格、库存等，从而提高电子商务的效率。",
              en_text:
                "Within e-commerce realms, UPCA barcodes uniquely mark each listed item, enhancing inventory control in terms of both speed and precision. A swift scan of the UPCA code divulges comprehensive product data like pricing and availability, thus bolstering the operational dynamics of online commerce.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "UPCE",
          url: 'upc-e',
          type: "UPCE",
          codeType: "BarCode",
          img:  "./img/code/UPCE.png",
          defaultValue: "04029311",
          buildLocally: false,
          head: {
            title: "Free Online Barcode Generator: UPC-E",
            description:
              "Free UPC-E Barcode Generator: Create compact UPC-E barcodes for smaller packages with our online generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "upc e barcode, UPC-E Barcode generator, Free Online UPC-E, ",
          },
          rules: [
            "字符集：数字0-9，起始0或1，最后一位校验位要自动生成",
            "字符长度：8位",
          ],
          en_rules: [
            "Character: Numbers 0-9, starting 0 or 1, the last check digit to be automatically generated",
            "Length: 8 bits",
          ],
          introduceList: [
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "在零售行业中，UPCE条码是一种常见的选择。由于其短小精悍的特性，UPCE条码经常出现在小型商品上，如口香糖、电池等。这种条码能够在有限的空间内提供足够的信息，使得零售商能够快速、准确地追踪商品的销售情况。",
              en_text:
                "UPCE barcodes are frequently selected in the retail sector for their compact size, making them ideal for smaller items like chewing gum and batteries. They deliver sufficient product details in a minimal footprint, enabling retailers to swiftly and precisely monitor sales.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "食品行业",
              en_title: "Food Industry",
              text: "在食品行业中，如一些小型包装食品上，如巧克力、糖果等，由于包装面积有限，使用UPCE条码可以有效地节省空间，同时也能确保商品信息的准确传递。",
              en_text:
                "In the food industry, particularly for modestly packaged items like chocolates and candies, the adoption of UPCE barcodes conserves packaging space while guaranteeing precise information transmission.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Food industry.png",
            },
            {
              title: "药品行业",
              en_title: "Pharmaceutical Industry",
              text: "在药品行业中，对于一些小型药品包装，如眼药水、口服液等，UPCE条码的应用可以确保药品信息的准确性，同时也方便了药品的管理和追踪。",
              en_text:
                "Within the pharmaceutical sector, UPCE barcodes are applied to small drug packages, such as eye drops and oral solutions, to maintain data integrity and streamline medication tracking and management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug management.png",
            },
            {
              title: "日用品行业",
              en_title: "Daily Necessities Industry",
              text: "在日用品行业中，如一些小型化妆品、个人护理产品上，UPCE条码的使用可以有效地提高商品管理的效率，同时也能确保商品信息的准确性。",
              en_text:
                "For daily essentials, including compact cosmetics and personal care items, UPCE barcodes enhance managerial efficiency and assure the precision of product data.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Supermarket.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "UPC_SUPPLEMENTAL_2DIGIT",
          url: 'upc-supplemental-2-digit',
          type: "UPC_SUPPLEMENTAL_2DIGIT",
          codeType: "BarCode",
          img:  "./img/code/UPC_SUPPLEMENTAL_2DIGIT.png",
          defaultValue: "55",
          buildLocally: false,
          head: {
            title: "Free Online Barcode Generator: UPC Supplemental 2",
            description:
              "Free Online UPC SUPPLEMENTAL 2 DIGIT Barcode Generator: Generate 2-digit supplemental UPC barcodes for magazines and books with our simple online tool. Enhance your product barcodes effortlessly. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords: "UPC Supplemental Barcode, 2-Digit Barcode,",
          },
          rules: ["字符集：数字0-9", "长度：2位"],
          en_rules: ["Character: Numbers 0-9", "Length: 2 bits"],
          introduceList: [
            {
              title: "版权管理",
              en_title: "Copyright Management",
              text: "UPC_SUPPLEMENTAL_2DIGIT条码可以用于版权的标识和管理，例如出版社、版权管理机构等。通过扫描UPC-A条码和补充码，可以快速识别版权的信息，例如版权的所有者、有效期、授权范围等信息，有助于保护版权的权益和管理版权的使用。",
              en_text:
                "UPC_SUPPLEMENTAL_2DIGIT barcodes facilitate copyright delineation and oversight for entities like publishers and rights organizations. Scanning these alongside UPC-A barcodes promptly unveils key details like ownership, duration, and licensing scope, bolstering copyright protection and governance.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Copyright management.png",
            },
            {
              title: "物流管理",
              en_title: "Logistics Management",
              text: "UPC_SUPPLEMENTAL_2DIGIT条码可以用于物流的追踪和管理，例如物流公司、快递公司等。通过扫描UPC-A条码和补充码，可以快速识别货物的信息，例如货物的来源、目的地、运输方式、运输时间等信息，有助于提高物流配送的效率和可靠性。",
              en_text:
                "UPC_SUPPLEMENTAL_2DIGIT barcodes can be used for logistical entities in expediting cargo tracking and oversight. Scans of UPC-A and supplemental barcodes swiftly reveal critical data like origin, destination, transit method, and timelines, thereby augmenting logistical dependability and operational pace.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry.png",
            },
            {
              title: "库存管理",
              en_title: "Inventory Management",
              text: "UPC_SUPPLEMENTAL_2DIGIT条码可以用于库存的标识和管理，例如仓库、超市、商场等。通过扫描UPC-A条码和补充码，可以快速识别商品的信息，例如商品的名称、规格、生产日期、批次等信息，有助于提高库存管理的效率和准确性。",
              en_text:
                "Warehouses and retail outlets employ UPC_SUPPLEMENTAL_2DIGIT barcodes for inventory identification and control. Scanning these in conjunction with UPC-A barcodes enables rapid access to product specifics—name, size, manufacture date, lot number—thereby refining inventory management effectiveness and precision.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Shipment tracking.png",
            },
            {
              title: "价格管理",
              en_title: "Price Management",
              text: "UPC_SUPPLEMENTAL_2DIGIT条码可以用于价格的标识和管理，例如商场、超市等。通过扫描UPC-A条码和补充码，可以快速识别商品的价格信息，有助于实现价格的自动化管理和调整。",
              en_text:
                "For pricing administration in venues like malls and supermarkets, UPC_SUPPLEMENTAL_2DIGIT barcodes are key. Scans deliver prompt price details, paving the way for automated price adjustments and management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Price management.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "UPC_SUPPLEMENTAL_5DIGIT",
          url: 'upc-supplemental-5-digit',
          type: "UPC_SUPPLEMENTAL_5DIGIT",
          codeType: "BarCode",
          img:  "./img/code/UPC_SUPPLEMENTAL_5DIGIT.png",
          defaultValue: "12345",
          buildLocally: false,
          head: {
            title: "Free Online Barcode Generator: UPC Supplemental 5",
            description:
              "Free UPC SUPPLEMENTAL 5 DIGIT  Barcode Generator: Create 5-digit supplemental UPC barcodes to provide additional pricing information with our free generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords: "UPC 5-Digit Supplemental, Extended Barcode Generator",
          },
          rules: ["字符集：数字0-9", "字符长度：5位"],
          en_rules: ["Character: Numbers 0-9", "Length: 5 bits"],
          introduceList: [
            {
              title: "价格管理",
              en_title: "Price Management",
              text: "UPC_SUPPLEMENTAL_5DIGIT条码可以用于价格的标识和管理，例如商场、超市等。通过扫描UPC-A条码和补充码，可以快速识别商品的价格信息，有助于实现价格的自动化管理和调整。",
              en_text:
                "UPC_SUPPLEMENTAL_5DIGIT barcodes can be used for price identification and management, such as shopping malls, supermarkets, etc. By scanning UPC-A barcodes and supplementary codes, the price information of goods can be quickly identified, which helps to realize automatic price management and adjustment.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Price management.jpg",
            },
            {
              title: "食品管理",
              en_title: "Food Management",
              text: "UPC_SUPPLEMENTAL_5DIGIT条码可以用于食品的标识和管理，例如超市、餐饮企业等。通过扫描UPC-A条码和补充码，可以快速识别食品的信息，例如食品的名称、产地、生产日期、保质期等信息，有助于提高食品管理的效率和安全性。",
              en_text:
                "UPC_SUPPLEMENTAL_5DIGIT barcodes can be used for the identification and management of food, such as supermarkets, catering enterprises, etc. By scanning UPC-A barcodes and supplementary codes, food information can be quickly identified, such as the name of the food, place of origin, production date, shelf life and other information, which helps to improve the efficiency and safety of food management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Food management.png",
            },
            {
              title: "医药管理",
              en_title: "Pharmaceutical Management",
              text: "UPC_SUPPLEMENTAL_5DIGIT条码可以用于医药的标识和管理，例如药店、医院等。通过扫描UPC-A条码和补充码，可以快速识别药品的信息，例如药品的名称、规格、生产日期、批次等信息，有助于提高医药管理的效率和安全性。",
              en_text:
                "UPC_SUPPLEMENTAL_5DIGIT barcodes can be used for the identification and management of medicines, such as pharmacies, hospitals, etc. By scanning UPC-A barcodes and supplementary codes, drug information can be quickly identified, such as drug name, specification, production date, batch and other information, which helps to improve the efficiency and safety of pharmaceutical management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug management.png",
            },
            {
              title: "物流管理",
              en_title: "Logistics Management",
              text: "UPC_SUPPLEMENTAL_5DIGIT条码可以用于物流的追踪和管理，例如物流公司、快递公司等。通过扫描UPC-A条码和补充码，可以快速识别货物的信息，例如货物的来源、目的地、运输方式、运输时间等信息，有助于提高物流配送的效率和可靠性。",
              en_text:
                "UPC_SUPPLEMENTAL_5DIGIT barcodes can be used for tracking and managing logistics, such as logistics companies, courier companies, etc. By scanning UPC-A barcodes and supplementary codes, the information of goods can be quickly identified, such as the source, destination, mode of transportation, transportation time and other information of the goods, which helps to improve the efficiency and reliability of logistics and distribution.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry.png",
            },
          ],
          tutorial: [],
        },
      ],
    },
    {
      title: "邮政条码",
      en_title: "Postal barcode",
      icon:  "./img/code/code-icon-3.png",
      children: [
        {
          title: "PostNet",
          url: 'postnet',
          type: "PostNet",
          codeType: "BarCode",
          img:  "./img/code/PostNet.png",
          defaultValue: "12345",
          buildLocally: false,
          head: {
            title: "Free Online Barcode Generator: PostNet",
            description:
              "Free PostNet Barcode Generator: Generate PostNet barcodes for US mail with our online tool. Improve mail sorting efficiency with accurate, easy-to-use PostNet codes. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "PostNet Barcode Generator, Postal Barcode Creation, US Mail Barcode Maker",
          },
          rules: ["字符集：数字0-9", "长度：5位，9位，或11位"],
          en_rules: [
            "Character: Numbers 0-9",
            "Length: 5-bit, 9-bit, or 11-bit",
          ],
          introduceList: [
            {
              title: "邮政服务",
              en_title: "Postal Services",
              text: "PostNet条码的设计初衷就是为了提升邮政服务的效率。它通过编码目的地邮政编码，实现邮件的快速分类和分拣。",
              en_text:
                "PostNet barcodes are designed toto enhance postal service efficiency, expediting mail classification and sorting by encoding destination ZIP codes.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Postal services.jpg",
            },
            {
              title: "快递物流",
              en_title: "Express Logistics",
              text: "在快递物流领域，邮政条码的应用也越来越广泛。它可以对包裹的目的地邮政编码进行编码，从而实现包裹的高效分拣和分拣，进一步提高物流效率。",
              en_text:
                "The use of PostNet barcodes is expanding in express logistics, allowing for the efficient sorting of packages by encoding the destination ZIP code, thereby enhancing logistics performance.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Express logistics.jpg",
            },
            {
              title: "电子商务",
              en_title: "E-commerce",
              text: "电子商务行业也开始广泛采用PostNet条码。商家通过对商品的邮编进行编码，使得商品在配送过程中的分类和分拣更为便捷，大大提升了配送效率。",
              en_text:
                "E-commerce has broadly embraced PostNet barcodes. Merchants encode product ZIP codes to streamline the sorting and classification during distribution, significantly boosting delivery efficiency.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce (2).png",
            },
            {
              title: "零售业",
              en_title: "Retail",
              text: "在零售业，特别是大型超市，PostNet条码的应用也日益普及。超市通过对商品的邮编进行编码，使得商品在配送和存储过程中的分类和分拣更为高效，大大提升了商品管理的效率。",
              en_text:
                "In retail, especially in large supermarkets, PostNet barcode adoption is on the rise. Supermarkets encode goods’ ZIP codes to facilitate more efficient sorting and storage during distribution, enhancing goods management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "FIM",
          url: 'fim',
          type: "FIM",
          codeType: "BarCode",
          img:  "./img/code/FIM.png",
          defaultValue: "A",
          buildLocally: false,
          head: {
            title:
              "Free Online Barcode Generator: FIM(Facing Identification Mark)",
            description:
              "Free FIM Barcode Generator: Generate FIM barcodes for mail sorting with our online tool. Ensure fast and accurate postal handling with easy-to-create FIM codes. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "FIM Barcode Maker, Postal Barcode, Free Facing Identification Mark",
          },
          rules: ["字符集：A，B，C，D，a，b，c，d", "字符长度：4位或5位"],
          en_rules: ["Character: A,B,C,D,a,b,c,d", "Length: 4-bit, or 5-bit"],
          introduceList: [
            {
              title: "邮政服务",
              en_title: "Postal Services",
              text: "FIM条码是美国邮政局设计的一种条形码，用于协助邮件的自动处理。在邮件的分拣和投递过程中，FIM条码起到了关键的作用。",
              en_text:
                "The FIM (Facing Identification Mark) barcode is designed by the U.S. Postal Service to aid in the automated processing of mail. It plays a crucial role in the sorting and delivery processes.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Postal services.jpg",
            },
            {
              title: "印刷业",
              en_title: "Printing",
              text: "在印刷行业中，FIM条码常常被印刷在预印信封和明信片的上边缘，靠近邮资区的左侧，以方便邮政工作人员进行邮件的自动处理。",
              en_text:
                "In the printing sector, FIM barcodes are commonly printed at the top edge of pre-printed envelopes and postcards, to the left side of the postage area, facilitating the automatic processing of mail by postal staff.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Printing.png",
            },
            {
              title: "邮资邮票制造业",
              en_title: "Postage Stamp Manufacturing Industry",
              text: "FIM条码也被用于标识邮资邮票或其等效物的区域，以便于邮政工作人员进行邮件的自动处理。",
              en_text:
                "FIM barcodes are also employed to mark the area of postage stamps or their equivalents, aiding postal workers in the automated processing of mail.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Postage stamp manufacturing industry.jpg",
            },
            {
              title: "自动化设备制造业",
              en_title: "Automation Equipment Manufacturing",
              text: "在自动化设备制造行业中，FIM条码可以用于向邮件自动处理设备指示所允许的特殊操作或应用的功能，从而提高邮件处理的效率和准确性。",
              en_text:
                "In the automated equipment manufacturing industry, FIM barcodes inform mail processing machines of the permissible special operations or functions, enhancing the mail processing's efficiency and accuracy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Automation equipment manufacturing.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Royal Dutch TPG Post KIX",
          url: 'royal-dutch-tpg-post-kix',
          type: "kix",
          codeType: "BarCode",
          img:  "./img/code/Royal Dutch TPG Post KIX.png",
          defaultValue: "012100123412345678AB19XY1A010",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: Royal Dutch TPG Post KIX",
            description:
              "Free Online Royal Dutch TPG Post KIX Barcode Generator: Generate KIX barcodes used by Royal Dutch TPG Post for mail sorting. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords: "Dutch KIX Barcode, TPG Post Barcode,",
          },
          rules: ["字符集：数字0-9及A-Z大写字母", "长度：长度可变"],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: Variable length",
          ],
          introduceList: [
            {
              title: "邮件管理",
              en_title: "Mail Management",
              text: "Royal Dutch TPG Post KIX条码可以用于邮件的标识和管理，例如邮局、快递公司等。通过扫描Royal Dutch TPG Post KIX条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件管理的效率和准确性。",
              en_text:
                "Royal Dutch TPG Post KIX barcodes are used for the identification and management of mail by entities like post offices and courier services. Scanning these barcodes provides quick access to mail information such as origin, destination, mailing times, and methods, contributing to more efficient and accurate mail management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "订单管理",
              en_title: "Order Management",
              text: "Royal Dutch TPG Post KIX条码可以用于订单的标识和管理，例如电商、物流公司等。通过扫描Royal Dutch TPG Post KIX条码，可以快速识别订单的信息，例如订单的编号、商品的名称、数量、价格等信息，有助于提高订单管理的效率和准确性。",
              en_text:
                "Royal Dutch TPG Post KIX barcodes are also utilized for identifying and managing orders in sectors such as e-commerce and logistics. Scanning these barcodes quickly reveals order details, such as order numbers, product names, quantities, and prices, thus improving the efficiency and accuracy of order management",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Order management (2).png",
            },
            {
              title: "电子商务管理",
              en_title: "E-commerce Management",
              text: "Royal Dutch TPG Post KIX条码可以用于电子商务的物流管理，例如电商、物流公司等。通过扫描Royal Dutch TPG Post KIX条码，可以快速识别订单的信息和快递物流的信息，有助于提高电子商务的物流效率和准确性。",
              en_text:
                "For e-commerce logistics, Royal Dutch TPG Post KIX barcodes facilitate the quick identification of order and courier logistics information, boosting logistics efficiency and accuracy for e-commerce operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce (2).png",
            },
            {
              title: "快递物流管理",
              en_title: "Express Logistics Management",
              text: "Royal Dutch TPG Post KIX条码可以用于快递物流的标识和管理，例如快递公司、物流公司等。通过扫描Royal Dutch TPG Post KIX条码，可以快速识别快递物流的信息，例如货物的来源、目的地、运输方式、运输时间等信息，有助于提高快递物流的效率和可靠性。",
              en_text:
                "In express logistics, the Royal Dutch TPG Post KIX barcode aids in identifying and managing logistics information. Scanning these barcodes provides immediate insights into details like the origin, destination, mode of transportation, and transit times, enhancing the efficiency and reliability of express logistics services.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Express logistics management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Royal Mail 4 State Customer Code",
          url: 'royal-mail-4-state-customer-code',
          type: "royalmail",
          codeType: "BarCode",
          img:  "./img/code/Royal Mail 4 State Customer Code.png",
          defaultValue: "LE28HS9Z",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: Royal Mail 4 State Customer Code(RM4SCC), Instantly Make Barcodes and Download for Free",
            description:
              "Free Online RM4SCC Barcode Generator: Create Royal Mail 4 State Customer barcodes for efficient mail sorting with our free online generator. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "Royal Mail Barcode, 4 State Customer Code, Free Barcode Maker",
          },
          rules: [
            "字符集：数字0-9及A-Z大写字母",
            "长度：长度可变，但通常为20-30位",
          ],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: The length is variable, but it is usually 20-30 bits",
          ],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "RM4SCC条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描RM4SCC条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "RM4SCC barcode can be used for identification and processing of mail, such as post offices, couriers, etc. By scanning the RM4SCC barcode, you can quickly identify the information of the mail, such as the source, destination, mailing time, mailing method, etc., which helps to improve the efficiency and accuracy of mail processing.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "RM4SCC条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描RM4SCC条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                "RM4SCC barcode can be used for mail tracking and management, such as courier companies, logistics companies, etc. By scanning the RM4SCC barcode, the information of the mail can be quickly identified, such as the source, destination, transportation method, transit time, etc. of the mail, which helps to improve the efficiency and reliability of mail tracking.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "RM4SCC条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描RM4SCC条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "RM4SCC barcode can be used for mail delivery and management, such as postman, post office, etc. By scanning the RM4SCC barcode, you can quickly identify the information of the mail, such as the delivery address of the mail, the delivery time, etc., which helps to improve the efficiency and accuracy of mail delivery.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "RM4SCC条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描RM4SCC条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "RM4SCC barcode can be used for sorting and management of mail, such as post office, courier company, etc. By scanning the RM4SCC barcode, you can quickly identify the information of the mail, such as the destination, mailing method, mailing time, etc., which helps to improve the efficiency and accuracy of mail sorting.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Japan Post 4 State Customer Code",
          url: 'japan-post-4-state-customer-code',
          type: "japanpost",
          codeType: "BarCode",
          img:  "./img/code/Japan Post 4State Customer Code.png",
          defaultValue: "6540123789-A-K-Z",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: Japan Post 4-state Barcode",
            description:
              "Free Online Japanese Post 4-State Customer Code Generator: Generate Japan Post 4 State Customer barcodes for reliable mail delivery with our online tool.  Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords: "Japan Post Barcode, 4 State Customer Code,",
          },
          rules: [
            "字符集：数字0-9及A-Z大写字母",
            "长度：长度可变，但通常为20-30位",
          ],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: The length is variable, but it is usually 20-30 bits",
          ],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "Japan Post 4 State Customer Code条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描Japan Post 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "For mail identification and processing by post offices and courier companies, scanning the Japan Post 4 State Customer Code (JP4SCC barcode) quickly provides mail information like the source, destination, mailing time, and method, enhancing the efficiency and precision of mail processing",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "Japan Post 4 State Customer Code条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描Japan Post 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                " The Japan Post 4 State Customer Codes (JP4SCC barcode)  are instrumental in mail tracking and management, aiding courier and logistics companies. Scanning the barcode offers rapid access to details such as the mail's origin, destination, mode, and time of transport, thus improving the tracking process's efficiency and reliability",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "Japan Post 4 State Customer Code条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描Japan Post 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "In terms of mail delivery and management, the  Japan Post 4 State Customer Code is utilized by postal workers and post offices. Scanning the JP4SCC barcode allows for the swift acquisition of information such as the delivery address and time, contributing to a more efficient and accurate delivery service.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "Japan Post 4 State Customer Code条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描Japan Post 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "The Japan Post 4 State Customer Code (JP4SCC barcode) also facilitates mail sorting and management for postal and courier services. By scanning the barcode, essential mail details such as destination, mailing method, and time are quickly retrieved, aiding in enhancing the sorting process's efficiency and accuracy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "AusPost 4 State Customer Code",
          url: 'auspost-4-state-customer-code',
          type: "auspost",
          codeType: "BarCode",
          img:  "./img/code/AusPost 4 State Customer Code.png",
          defaultValue: "6279438541AaaB 155",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: Australia Post 4-state Barcode",
            description:
              "Free Online Australia Post 4-State Barcode Generator: Create Australian Post 4 State Customer barcodes for mail and parcel sorting with our online generator. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "Australia Post 4-state Barcode Generator, AusPost Barcode, 4 State Barcode Maker, Australia Post 4-state Barcode",
          },
          rules: ["字符集：数字0-9", "长度：长度可变，但通常为10-15位"],
          en_rules: [
            "Character: Numbers 0-9",
            "Length: The length is variable, but it is usually 10-15 bits",
          ],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "AusPost 4 State Customer Code条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描AusPost 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "For identification and processing of mail by entities such as post offices and courier companies, the AusPost 4 State Customer Code provides a rapid means to access mail data including origin, destination, and mailing details, thus enhancing mail processing efficiency and precision.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "AusPost 4 State Customer Code条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描AusPost 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                "Mail tracking and management leverage the AusPost 4 State Customer Code for its ability to swiftly furnish information on the mail's route and timing, benefiting courier and logistics companies by boosting the tracking process's efficiency and trustworthiness.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "AusPost 4 State Customer Code条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描AusPost 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "In the realm of mail delivery and management, scanning the AusPost 4 State Customer Code allows postal workers and post offices to quickly ascertain delivery details, such as address and time, thereby improving the effectiveness and exactitude of mail delivery services.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "AusPost 4 State Customer Code条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描AusPost 4 State Customer Code条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "AusPost 4 State Customer Code also serves a vital role in mail sorting and management for postal and courier services, providing quick access to key details that facilitate a more efficient and accurate sorting operation.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Deutsche Post Identcode",
          url: 'deutsche-post-identcode',
          type: "identcode",
          codeType: "BarCode",
          img:  "./img/code/Deutsche Post Identcode.png",
          defaultValue: "563102430313",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: Deutsche Post Identcode",
            description:
              "Free Online Deutsche Post Identcode Generator: Generate Identcode barcodes used by Deutsche Post for mail sorting with our free tool. Ensure efficient and accurate postal service. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords: "Deutsche Post Identcode, Postal Barcode Generator,",
          },
          rules: ["字符集：数字0-9", "长度：通常为12位"],
          en_rules: ["Character: Numbers 0-9", "Length: Usually 12 bits"],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "Deutsche Post Identcode条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描Deutsche Post Identcode条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "Post offices and courier companies utilize the Deutsche Post Identcode barcode to quickly access information about mail items, including origin, destination, and mailing specifics. This helps to streamline mail processing and increase the precision of mail handling operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "Deutsche Post Identcode条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描Deutsche Post Identcode条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                "For courier and logistics companies, scanning the Deutsche Post Identcode allows for the rapid acquisition of mail details such as the routing and timing of shipments. This capability is integral to boosting the efficiency and reliability of mail tracking systems.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "Deutsche Post Identcode条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描Deutsche Post Identcode条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "Postmen and postal offices can scan the Deutsche Post Identcode to swiftly gather pertinent information for the delivery of mail, including addresses and expected delivery times, contributing to the enhancement of the delivery process in terms of both efficiency and accuracy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "Deutsche Post Identcode条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描Deutsche Post Identcode条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "Deutsche Post Identcode  is also instrumental for postal services and couriers in the sorting and management of mail, as it provides immediate access to essential information that aids in the refinement of mail sorting processes, ultimately leading to improved efficiency and precision.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Deutsche Post Leitcode",
          url: 'deutsche-post-leitcode',
          type: "leitcode",
          codeType: "BarCode",
          img:  "./img/code/Deutsche Post Leitcode.png",
          defaultValue: "21348075016401",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: Deutsche Post Leitcode",
            description:
              "Free Online Deutsche Post Leitcode Generator: Create Leitcode barcodes for Deutsche Post with our simple online generator. Ideal for parcel identification and sorting. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords: "Deutsche Post Leitcode, Parcel Barcode Maker",
          },
          rules: ["字符集：数字0-9", "长度：通常为13位"],
          en_rules: ["Character: Numbers 0-9", "Length: Usually 13 bits"],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "Deutsche Post Leitcode条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描Deutsche Post Leitcode条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "Deutsche Post Leitcode helps post offices and courier companies by providing a quick means to access mail information like origin, destination, mailing time, and method. Such efficient information retrieval contributes to more streamlined and accurate mail processing.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "Deutsche Post Leitcode条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描Deutsche Post Leitcode条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                "Logistics companies can scan the Deutsche Post Leitcode to swiftly acquire detailed information on mail items, aiding in tracking activities. This improves both the efficiency of tracking and the reliability of the delivery process.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "Deutsche Post Leitcode条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描Deutsche Post Leitcode条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "The Leitcode barcode also serves postal workers by allowing them to quickly get delivery-related details, such as the mail's address and expected delivery schedule. This facilitates a more efficient and precise delivery service.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "Deutsche Post Leitcode条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描Deutsche Post Leitcode条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "In the context of sorting and managing mail, scanning the Deutsche Post Leitcode provides immediate access to important information that is necessary for effective sorting, ensuring better accuracy and efficiency in mail handling operations.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "USPS Intelligent Mail",
          url: 'usps-intelligent-mail-barcode',
          type: "onecode",
          codeType: "BarCode",
          img:  "./img/code/USPS Intelligent Mail.png",
          defaultValue: "0123456709498765432101234567891",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: USPS Intelligent Mail Barcode",
            description:
              "Free Online USPS Intelligent Mail Barcode Generator: Generate USPS Intelligent Mail barcodes for enhanced mail tracking and sorting with our free tool. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "USPS Intelligent Mail Barcode, USPS Barcode Generator, Mail Tracking Barcode",
          },
          rules: ["字符集：数字0-9及A-Z大写字母", "长度：通常为65位或31位"],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: Usually 65-bit or 31-bit",
          ],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "USPS Intelligent Mail条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描USPS Intelligent Mail条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "USPS Intelligent Mail barcodes can be used for the identification and processing of mail, such as post offices, couriers, etc. By scanning the USPS Intelligent Mail barcode, you can quickly identify the information of the mail, such as the source, destination, mailing time, mailing method, etc., which helps to improve the efficiency and accuracy of mail processing.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "USPS Intelligent Mail条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描USPS Intelligent Mail条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                "USPS Intelligent Mail barcodes can be used for mail tracking and management, such as courier companies, logistics companies, etc. By scanning the USPS Intelligent Mail barcode, the information of the message, such as the source, destination, transportation method, transit time, etc. of the message, can be quickly identified, which helps to improve the efficiency and reliability of mail tracking.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "USPS Intelligent Mail条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描USPS Intelligent Mail条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "USPS Intelligent Mail barcodes can be used for mail delivery and management, such as postmen, post offices, etc. By scanning the USPS Intelligent Mail barcode, you can quickly identify the information of the mail, such as the delivery address of the message, the delivery time and other information, which helps improve the efficiency and accuracy of mail delivery.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "USPS Intelligent Mail条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描USPS Intelligent Mail条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "USPS Intelligent Mail barcodes can be used for sorting and managing mail, such as post offices, couriers, etc. By scanning the USPS Intelligent Mail barcode, you can quickly identify the information of the mail, such as the destination, mailing method, mailing time, etc., which helps improve the efficiency and accuracy of mail sorting.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "USPS PLANET",
          url: 'usps-planet',
          type: "planet",
          codeType: "BarCode",
          img:  "./img/code/USPS PLANET.png",
          defaultValue: "01234567890",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: USPS PLANET Barcode",
            description:
              "Free Online USPS PLANET Barcode Generator: Create USPS PLANET barcodes for efficient mail processing. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords: "PLANET Barcode, USPS Barcode Creator, Postal Barcode",
          },
          rules: ["字符集：数字0-9", "长度：通常为12位或14位"],
          en_rules: [
            "Character: Numbers 0-9",
            "Length: Usually 12-bit or 14-bit",
          ],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "USPS PLANET条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描USPS PLANET条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "USPS PLANET barcodes can be used for the identification and processing of mail, such as post offices, couriers, etc. By scanning the USPS PLANET barcode, you can quickly identify the information of the mail, such as the source, destination, mailing time, mailing method, etc., which helps to improve the efficiency and accuracy of mail processing.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "USPS PLANET条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描USPS PLANET条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                "USPS PLANET barcodes can be used for mail tracking and management, such as courier companies, logistics companies, etc. By scanning the USPS PLANET barcode, the information of the mail, such as the source, destination, transportation method, transit time, etc. of the mail, can be quickly identified, which helps to improve the efficiency and reliability of mail tracking.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "USPS PLANET条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描USPS PLANET条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "USPS PLANET barcodes can be used for mail delivery and management, such as postmen, post offices, etc. By scanning the USPS PLANET barcode, you can quickly identify the information of the mail, such as the delivery address of the mail, the delivery time and other information, which helps to improve the efficiency and accuracy of mail delivery.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "USPS PLANET条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描USPS PLANET条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "USPS PLANET barcodes can be used for sorting and managing mail, such as post offices, couriers, etc. By scanning the USPS PLANET barcode, you can quickly identify the information of the mail, such as the destination, mailing method, mailing time, etc., which helps to improve the efficiency and accuracy of mail sorting.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "USPS POSTNET",
          url: 'usps-postnet',
          type: "postnet",
          codeType: "BarCode",
          img:  "./img/code/USPS POSTNET.png",
          defaultValue: "12345123412",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: USPS POSTNET ",
            description:
              "Free Online USPS POSTNET Barcode Generator: Generate USPS POSTNET barcodes for mail sorting and delivery services. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "POSTNET Barcode, USPS Barcode, Free Postal Code Generator, Mail Barcode",
          },
          rules: ["字符集：数字0-9", "长度：通常为5位、9位或11位"],
          en_rules: [
            "Character: Numbers 0-9",
            "Length: Usually 5, 9 or 11 bits",
          ],
          introduceList: [
            {
              title: "邮件处理",
              en_title: "Message Processing",
              text: "USPS POSTNET条码可以用于邮件的标识和处理，例如邮局、快递公司等。通过扫描USPS POSTNET条码，可以快速识别邮件的信息，例如邮件的来源、目的地、邮寄时间、邮寄方式等信息，有助于提高邮件处理的效率和准确性。",
              en_text:
                "USPS POSTNET barcodes are pivotal for mail identification and processing by entities such as post offices and courier companies. Scanning USPS POSTNET barcodes allows quick access to mail details like origin, destination, mailing time, and method, enhancing mail handling efficiency and precision.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail management.png",
            },
            {
              title: "邮件跟踪",
              en_title: "Message Tracking",
              text: "USPS POSTNET条码可以用于邮件的跟踪和管理，例如快递公司、物流公司等。通过扫描USPS POSTNET条码，可以快速识别邮件的信息，例如邮件的来源、目的地、运输方式、运输时间等信息，有助于提高邮件跟踪的效率和可靠性。",
              en_text:
                "USPS POSTNET barcodes are instrumental for mail tracking and management for couriers and logistics firms. Scanning these barcodes reveals crucial mail details, aiding in boosting the efficiency and reliability of mail tracking.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Message processing.png",
            },
            {
              title: "邮件投递",
              en_title: "Mail Delivery",
              text: "USPS POSTNET条码可以用于邮件的投递和管理，例如邮递员、邮局等。通过扫描USPS POSTNET条码，可以快速识别邮件的信息，例如邮件的投递地址、投递时间等信息，有助于提高邮件投递的效率和准确性。",
              en_text:
                "For mail delivery and management, USPS POSTNET barcodes are invaluable to postal workers and post offices. They enable the rapid identification of mail details, such as delivery addresses and times, improving delivery efficiency and accuracy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail delivery.png",
            },
            {
              title: "邮件分拣",
              en_title: "Mail Picking",
              text: "USPS POSTNET条码可以用于邮件的分拣和管理，例如邮局、快递公司等。通过扫描USPS POSTNET条码，可以快速识别邮件的信息，例如邮件的目的地、邮寄方式、邮寄时间等信息，有助于提高邮件分拣的效率和准确性。",
              en_text:
                "USPS POSTNET barcodes facilitate mail sorting and management for postal services and courier companies. Scanning the barcodes offers quick insight into mail details, aiding in the enhancement of sorting efficiency and precision.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Mail picking.png",
            },
          ],
          tutorial: [],
        },
      ],
    },
    {
      title: "ISBN码",
      en_title: "ISBN code",
      icon:  "./img/code/code-icon-4.png",
      children: [
        {
          title: "BOOKLAND",
          url: 'bookland-ean',
          type: "BOOKLAND",
          codeType: "BarCode",
          img:  "./img/code/BOOKLAND.png",
          defaultValue: "9781234567891",
          buildLocally: false,
          head: {
            title: "Free Online Barcode Generator: BOOKLAND",
            description:
              "Free Online BOOKLAND Barcode Generator: Create ISBN BOOKLAND barcodes for books with our free online generator.  Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "BOOKLAND Barcode, EAN Barcode Generator, ISBN Barcode, Free Online Barcode",
          },
          rules: ["字符集：数字0-9", "长度：5位，9位，或11位"],
          en_rules: [
            "Character: Numbers 0-9",
            "Length: Usually 5, 9 or 11 bits",
          ],
          introduceList: [
            {
              title: "出版业",
              en_title: "Publishing Industry",
              text: "BOOKLAND条形码是国际标准书号的一部分，用于全球图书识别和分类。图书出版时，出版商会为每本图书分配一个唯一的BOOKLAND条形码，以方便图书的管理和销售。",
              en_text:
                "The BOOKLAND barcode forms an integral component of the International Standard Book Number system, facilitating global book identification and categorization. Upon publication, each book is endowed with a distinct BOOKLAND barcode by the publisher, streamlining its management and commercial distribution.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Publishing industry.png",
            },
            {
              title: "图书销售",
              en_title: "Book Sales",
              text: "无论是实体书店还是在线电子商务平台，都会使用BOOKLAND条码来管理图书库存，跟踪图书销售情况，以及进行图书的分类和排序。",
              en_text:
                "Both physical bookstores and online e-commerce platforms leverage BOOKLAND barcodes to oversee book inventories, monitor sales trends, and implement efficient classification and organization of books.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Book sales.png",
            },
            {
              title: "图书馆",
              en_title: "Library",
              text: "图书馆也会使用BOOKLAND条码来管理其图书资源。通过扫描图书上的BOOKLAND条码，可以快速获取图书的详细信息，包括作者、出版社、出版日期等，同时也方便图书的借阅和归还。",
              en_text:
                "Libraries utilize BOOKLAND barcodes for the efficient administration of their book collections. Scanning a book’s BOOKLAND barcode provides quick access to comprehensive details such as the author, publisher, and publication date, enhancing the circulation process.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Library.png",
            },
            {
              title: "教育机构",
              en_title: "Educational Institutions",
              text: "许多学校和教育机构也会使用BOOKLAND条码来管理其教材和参考书籍。通过扫描教材上的BOOKLAND条码，教师和学生可以快速获取教材的详细信息，同时也方便教材的分发和回收。",
              en_text:
                "Educational institutions and schools employ BOOKLAND barcodes for managing instructional materials and reference books. This allows educators and students to swiftly access extensive details about the textbooks, aiding in their distribution and retrieval.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Educational institutions.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "ISMN",
          url: 'ismn',
          type: "ismn",
          codeType: "BarCode",
          img:  "./img/code/ISMN.png",
          defaultValue: "979-0-2600-0043-8",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: ISMN",
            description:
              "Free Online ISMN Barcode Generator: Generate ISMN barcodes for music publications with our online tool. Easy, free, and perfect for publishers and retailers of sheet music. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "ISMN Barcode, Music Barcode Generator, Free ISMN Code, Sheet Music Barcode",
          },
          rules: ["字符集：数字0-9", "长度：通常为13位"],
          en_rules: ["Character: Numbers 0-9", "Length: Usually 13 bits"],
          introduceList: [
            {
              title: "音乐库存管理",
              en_title: "Music Inventory Management",
              text: "ISMN条码可以用于音乐库存管理。通过ISMN，音乐库存管理人员可以更好地跟踪和管理库存中的音乐作品，同时也可以更好地进行库存管理和销售。",
              en_text:
                "ISMN barcodes are instrumental in identifying musical works, aiding publishers in the effective management and marketing of their compositions. The allocation of ISMNs facilitates global tracking, sales, and promotion of these musical works.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Music inventory management.png",
            },
            {
              title: "音乐出版",
              en_title: "Music Publishing",
              text: "ISMN条码可以用于标识音乐作品，帮助出版商更好地管理和推广音乐作品。通过分配ISMN，出版商可以更好地跟踪和管理自己的音乐作品，同时也方便音乐作品在全球范围内的销售和推广",
              en_text:
                "ISMN barcodes can be used to identify musical works, helping publishers better manage and promote musical works. By distributing ISMN, publishers can better track and manage their own musical works, while also facilitating the sale and promotion of musical works worldwide",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Music publishing.png",
            },
            {
              title: "音乐版权管理",
              en_title: "Music Rights Management",
              text: "ISMN条码可以用于音乐版权管理。通过ISMN，版权管理人员可以更好地跟踪和管理音乐作品的版权信息，同时也可以更好地维护音乐作品的版权。",
              en_text:
                "ISMN barcodes can be used for music rights management. They empower copyright managers to meticulously track and safeguard copyright details of musical compositions.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Copyright management.png",
            },
            {
              title: "音乐市场分析",
              en_title: "Music Market Analysis",
              text: "ISMN条码可以用于音乐市场分析。通过ISMN，市场分析人员可以更好地跟踪和分析音乐市场中的音乐作品，同时也可以更好地了解音乐市场的发展趋势和需求。",
              en_text:
                "ISMN barcodes can be used for music market analysis. Analysts leverage them to keenly monitor and decipher trends and demands within the music industry.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Music market analysis.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "ISSN",
          url: 'issn',
          type: "issn",
          codeType: "BarCode",
          img:  "./img/code/ISSN.png",
          defaultValue: "0317-8471 00",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: ISSN",
            description:
              "Free Online ISSN Barcode Generator: Effortlessly create ISSN barcodes for periodicals and serial publications. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "ISSN Barcode, Periodical Barcode Maker, Serial Publication Code, Free Barcode Tool",
          },
          rules: ["字符集：数字0-9", "长度：8位"],
          en_rules: ["Character: Numbers 0-9", "Length: 8 bits"],
          introduceList: [
            {
              title: "连续出版物管理",
              en_title: "Serial Publications Management",
              text: "ISSN条码为连续出版物提供了一个全球统一的标识方式。这种条码技术使得图书馆、出版社和零售商能够更高效地管理、分类和跟踪期刊、杂志和报纸等连续出版物的流通。",
              en_text:
                "ISSN barcodes establish a uniform identification system for serial publications globally, enhancing the efficiency of libraries, publishers, and retailers in managing and tracking the dissemination of periodicals, magazines, and newspapers.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Serial publications management.png",
            },
            {
              title: "图书馆管理",
              en_title: "Library Management",
              text: "ISSN条码可以用于图书馆管理。通过ISSN，图书馆管理员可以更好地跟踪和管理馆藏中的连续出版物，同时也可以更好地进行馆藏管理和借阅。",
              en_text:
                "Libraries harness ISSN barcodes for streamlined management of serial publications within their holdings, which supports improved archival organization and lending processes.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Library management.png",
            },
            {
              title: "学术研究",
              en_title: "Academic Research",
              text: "ISSN条码可以用于学术研究。通过ISSN，研究人员可以更好地跟踪和分析相关的连续出版物，同时也可以更好地了解相关研究领域的发展趋势和动态。",
              en_text:
                "ISSN barcodes are a boon to academic research, as they enable researchers to track and evaluate serial publications, gaining insights into the progression and current affairs of specific scholarly domains.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Publishing industry.png",
            },
            {
              title: "市场分析",
              en_title: "Market Analysis",
              text: "ISSN条形码可用于市场分析。借助ISSN，市场分析师可以更好地跟踪和分析相关连续出版物，同时更好地了解相关市场的趋势和需求。",
              en_text:
                "ISSN barcodes can be used for market analysis, aiding analysts in monitoring and interpreting the circulation and market demands of relevant serial publications.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Market analysis.png",
            },
          ],
          tutorial: [],
        },
      ],
    },
    {
      title: "GS1 DataBar",
      en_title: "GS1 DataBar",
      icon:  "./img/code/code-icon-5.png",
      children: [
        {
          title: "GS1 DataBar Expanded",
          url: 'gs1-databar-expanded',
          type: "databarexpanded",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Expanded.png",
          defaultValue: "(01)09521234543213(3103)000123",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: GS1 DataBar Expanded",
            description:
              "Free GS1 DataBar Expanded Barcode Generator: Use our online tool to generate GS1 DataBar Expanded barcodes for coupons and fresh produce. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 DataBar Expanded, Free Barcode Generator, Online DataBar Creator, Expanded Barcode Tool",
          },
          rules: ["字符集：数字0-9及A-Z大写字母", "长度：长度可变"],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: Variable length",
          ],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Expanded Composite",
          url: 'gs1-databar-expanded-composite',
          type: "databarexpandedcomposite",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Expanded Composite.png",
          defaultValue: "(01)09521234543213(3103)001234|(91)1A2B3C4D5E",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Expanded Composite ",
            description:
              "Free GS1 DataBar Expanded Composite Barcode Generator: Generate GS1 DataBar Expanded Composite barcodes, combining additional information for healthcare and retail.  Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 DataBar Composite, Expanded Composite Barcode, Free Barcode Maker, Healthcare Barcode Generator",
          },
          rules: ["字符集：数字0-9及A-Z大写字母", "长度：最大74数字/41字母"],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: Maximum 74 numbers/41 letters",
          ],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Expanded Stacked",
          url: 'gs1-databar-expanded-stacked',
          type: "databarexpandedstacked",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Expanded Stacked.png",
          defaultValue: "(01)09521234543213(3103)000123",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Expanded Stacked",
            description:
              "Free GS1 DataBar Expanded Stacked Barcode Generator: Create stacked versions of GS1 DataBar Expanded for products with limited label space using our simple generator. Free, efficient, and downloadable.",
            keywords:
              "GS1 Stacked Barcode, DataBar Expanded Stacked, Free Online Generator, Limited Space Barcode",
          },
          rules: ["字符集：数字0-9及A-Z大写字母", "长度：最大74数字/41字母"],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: Maximum 74 numbers/41 letters",
          ],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Expanded Stacked Composite",
          url: 'gs1-databar-expanded-stacked-composite',
          type: "databarexpandedstackedcomposite",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Expanded Stacked Composite.png",
          defaultValue: "(01)09521234543213(10)ABCDEF|(21)12345678",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Expanded Stacked Composite",
            description:
              "Free GS1 DataBar Expanded Stacked Composite Barcode Generator: Generate GS1 DataBar Expanded Stacked Composite barcodes, ideal for small items needing extra data, with our online tool. Fast and user-friendly. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "DataBar Stacked Composite, Expanded Barcode, Small Item Barcode, Free Barcode Tool",
          },
          rules: ["字符集：数字0-9及A-Z大写字母", "长度：最大74数字/41字母"],
          en_rules: [
            "Character: Numbers 0-9 and A-Z capital letters",
            "Length: Maximum 74 numbers/41 letters",
          ],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Limited",
          url: 'gs1-databar-limited',
          type: "databarlimited",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Limited.png",
          defaultValue: "(01)0952123454321",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: GS1 DataBar Limited",
            description:
              "Free Online GS1 DataBar Limited Barcode Generator: Effortlessly generate GS1 DataBar Limited barcodes for small healthcare items with our online barcode maker.  Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "GS1 DataBar Limited, Healthcare Barcode, Free Barcode Generator, Restricted Space Barcode",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Limited Composite",
          url: 'gs1-databar-limited-composite',
          type: "databarlimitedcomposite",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Limited Composite.png",
          defaultValue: "(01)09521234543213|(21)abcdefghijklmnopqrst",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Limited Composite",
            description:
              "Free Online GS1 DataBar Limited Composite Barcode Generator: Create GS1 DataBar Limited Composite barcodes suitable for healthcare items with our easy-to-use tool. Generate accurate barcodes for free.",
            keywords:
              "GS1 Limited Composite, DataBar Limited Barcode, Online Barcode Creator, Healthcare Item Code",
          },
          rules: [
            "字符集：主条码仅数字（0-9）。复合组件可以包括字母数字字符。",
            "长度：主条码为14位数字。复合组件的长度可以变化。",
          ],
          en_rules: [
            "Character: The main barcode is numeric only (0-9). Composite components can include alphanumeric characters.",
            "Length: The main barcode is 14 digits. The length of composite components can vary.",
          ],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Omnidirectional",
          url: 'gs1-databar-omnidirectional',
          type: "databaromni",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Omnidirectional.png",
          defaultValue: "(01)0952123454321",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: GS1 DataBar Omnidirectiona",
            description:
              "Free Online GS1 DataBar Omnidirectional Barcode Generator: Generate GS1 DataBar Omnidirectional barcodes, ideal for retail point-of-sale scanning, with our free online barcode generator. Fast and reliable.",
            keywords:
              "GS1 Omnidirectional Barcode, Retail Barcode, POS Barcode Generator, Free Online Barcode",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Omnidirectional Composite",
          url: 'gs1-databar-omnidirectional-composite',
          type: "databaromnicomposite",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Omnidirectional Composite.png",
          defaultValue: "(01)09521234543213|(11)990102",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Omnidirectional Composite",
            description:
              "FreeGS1 DataBar Omnidirectional Composite Barcode Generator: Create GS1 DataBar Omnidirectional Composite barcodes for retail items with additional information like coupons. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Omni Composite Barcode, DataBar Composite, Coupon Barcode Maker, Free Barcode Tool",
          },
          rules: [
            "字符集：主条码仅数字（0-9）。复合组件可以包括字母数字字符。",
            "长度：主条码为14位数字。复合组件的长度可以变化。",
          ],
          en_rules: [
            "Character: The main barcode is numeric only (0-9). Composite components can include alphanumeric characters.",
            "Length: The main barcode is 14 digits. The length of composite components can vary.",
          ],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Stacked",
          url: 'gs1-databar-stacked',
          type: "databarstacked",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Stacked.png",
          defaultValue: "(01)0952123454321",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: GS1 DataBar Stacked",
            description:
              "Free Online GS1 DataBar Stacked Barcode Generator: Generate GS1 DataBar Stacked barcodes for a variety of retail products using our online tool.  Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Stacked Barcode, DataBar Stacked, Retail Barcode Generator, Online Barcode Maker",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Stacked Composite",
          url: 'gs1-databar-stacked-composite',
          type: "databarstackedcomposite",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Stacked Composite.png",
          defaultValue: "(01)09521234543213|(21)abcdefghijklmnopqrst",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Stacked Composite",
            description:
              "Free GS1 DataBar Stacked Composite Barcode Generator: Create GS1 DataBar Stacked Composite barcodes that carry additional data for retail applications. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "GS1 Stacked Composite, Additional Data Barcode, Retail Barcode Creator, Free Barcode Generator",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Stacked Omnidirectional",
          url: 'gs1-databar-stacked-omnidirectional',
          type: "databarstackedomni",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Stacked Omnidirectional.png",
          defaultValue: "(01)2401234567890",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Stacked Omnidirectional, Instantly Make Barcodes and Download for Free",
            description:
              "Free GS1 DataBar Stacked Omnidirectional Barcode Generator: Generate GS1 DataBar Stacked Omnidirectional barcodes, perfect for point-of-sale systems. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Stacked Omni Barcode, POS Barcode, Free Barcode Tool, Online Barcode Generation",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Stacked Omnidirectional Composite",
          url: 'gs1-databar-stacked-omnidirectional-composite',
          type: "databarstackedomnicomposite",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Stacked Omnidirectional Composite.png",
          defaultValue: "(01)09521234543213|(11)990102",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Stacked Omnidirectional Composite, Instantly Make Barcodes and Download for Free",
            description:
              "Free GS1 DataBar Stacked Omnidirectional Composite Barcode Generator: Create GS1 DataBar Stacked Omnidirectional Composite barcodes for items with additional data like weight and expiry. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Stacked Omni Composite, Extra Data Barcode, POS Barcode Maker, Free Online Barcode",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Truncated",
          url: 'gs1-databar-truncated',
          type: "databartruncated",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Truncated.png",
          defaultValue: "(01)09521234543213",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Truncated, Instantly Make Barcodes and Download for Free",
            description:
              "Free Online GS1 DataBar Truncated Barcode Generator: Generate GS1 DataBar Truncated barcodes for products where space is premium. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Truncated Barcode, Space-Saving Barcode, Free Barcode Generator, Online Barcode Maker",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 DataBar Truncated Composite",
          url: 'gs1-databar-truncated-composite',
          type: "databartruncatedcomposite",
          codeType: "BarCode",
          img:  "./img/code/GS1 DataBar Truncated Composite.png",
          defaultValue: "(01)09521234543213|(11)990102",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: GS1 DataBar Truncated Composite, Instantly Make Barcodes and Download for Free",
            description:
              "Free Online GS1 DataBar Truncated Composite Barcode Generator: Create GS1 DataBar Truncated Composite barcodes, perfect for retail items needing additional data within a small space. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "GS1 Truncated Composite, Compact Barcode, Additional Data Barcode, Free Barcode Tool",
          },
          rules: ["字符集：数字0-9", "长度：14位数字"],
          en_rules: ["Character: Numbers 0-9", "Length: 14 digits"],
          introduceList: [
            {
              title: "医药保健行业",
              en_title: "Pharmaceutical And Health Care Industry",
              text: "GS1 DataBar条码在医药保健行业中有着广泛的应用。它可以有效地编码药品和医疗产品的关键信息，如序列号、批号和到期日期，从而确保产品的安全和质量。",
              en_text:
                "GS1 DataBar barcode has a wide range of applications in the healthcare industry. It can effectively code key information such as serial numbers, batch numbers, and expiration dates for pharmaceutical and medical products, ensuring product safety and quality.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售POS系统",
              en_title: "Retail POS System",
              text: "GS1 DataBar条码已被广泛应用于各种零售POS（销售点）扫描系统。其设计使得零售商能够更精确地进行库存管理，同时为消费者提供了更为详尽的产品信息。",
              en_text:
                "GS1 DataBar barcodes have been widely used in various retail POS (point of sale) scanning systems. Its design allows retailers to manage inventory more precisely while providing consumers with more detailed product information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Retail POS system.png",
            },
            {
              title: "消费品制造与贸易",
              en_title: "Manufacturing And Trading Of Consumer Goods",
              text: "GS1 DataBar条码也被消费品制造商和贸易协会广泛采用。它可以编码产品的所有关键信息，如重量、价格和有效期，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 DataBar barcodes are also widely adopted by consumer goods manufacturers and trade associations. It can encode all the key information of the product, such as weight, price, and expiration date, thus increasing the transparency and efficiency of the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Manufacturing and trading of consumer goods.png",
            },
            {
              title: "物流业",
              en_title: "Logistics Industry",
              text: "GS1 DataBar条码可以用于物流业的商品管理。通过GS1 DataBar条码，物流公司可以更好地跟踪和管理商品信息，例如商品的来源、目的地、运输方式、运输时间等信息，同时也方便货物的分拣和配送。",
              en_text:
                "GS1 DataBar barcodes can be used for commodity management in the logistics industry. Through the GS1 DataBar barcode, logistics companies can better track and manage commodity information, such as the source, destination, transportation method, transit time and other information of the goods, and also facilitate the sorting and distribution of goods.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
      ],
    },
    {
      title: "医疗器械码",
      en_title: "Medical Device Code",
      icon:  "./img/code/code-icon-7.png",
      children: [
        {
          title: "Flattermarken",
          url: 'flattermarken',
          type: "flattermarken",
          codeType: "BarCode",
          img:  "./img/code/Flattermarken.png",
          defaultValue: "1304",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: Flattermarken",
            description:
              "Free Online Flattermarken Barcode Generator: Generate Flattermarken barcodes for logistics and parcel tracking with our online tool.  Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "Flattermarken, Flattermarken Barcode, Logistics Barcode Generator, Parcel Tracking Code",
          },
          rules: ["字符集：数字0-9", "长度：最多90位"],
          en_rules: ["Character: Numbers 0-9", "Length: Up to 90 bits"],
          introduceList: [
            {
              title: "商品防伪",
              en_title: "Anti-counterfeiting Of Goods",
              text: "Flattermarken可以用于商品防伪。通过在商品包装或标签上嵌入Flattermarken水印，可以有效地防止商品的伪造和仿冒，同时也方便消费者对商品的识别和验证。",
              en_text:
                "Flattermarken is effective for goods anti-counterfeiting. Embedding a Flattermarken watermark on product packaging or labels significantly hinders the falsification of goods while simplifying product authentication for consumers.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Anti-counterfeiting of goods.png",
            },
            {
              title: "版权保护",
              en_title: "Copyright Protection",
              text: "Flattermarken可以用于版权保护。通过在数字图片或文档中嵌入Flattermarken水印，可以有效地防止图片或文档的盗用和侵权行为，同时也方便版权所有者对图片或文档的追踪和管理。",
              en_text:
                "Flattermarken serves as a robust tool for copyright protection. Incorporating the Flattermarken watermark within digital images or documents deters unauthorized use and copyright infringement, offering copyright holders a means to easily track and manage their content.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Copyright Protection.png",
            },
            {
              title: "证件防伪",
              en_title: "Anti-counterfeiting Of Documents",
              text: "Flattermarken可以用于证件防伪。通过在证件中嵌入Flattermarken水印，可以有效地防止证件的伪造和篡改，同时也方便证件的识别和验证。",
              en_text:
                "Flattermarken is adept at preventing document falsification. The integration of the Flattermarken watermark into official certificates guards against counterfeiting and alteration, streamlining the process of document recognition and validation.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Anti-counterfeiting of documents.png",
            },
            {
              title: "数字文档防伪",
              en_title: "Digital Document Counterfeiting",
              text: "Flattermarken可以用于数字文档防伪。通过在数字文档中嵌入Flattermarken水印，可以有效地防止文档的篡改和盗用，同时也方便文档的追踪和管理。",
              en_text:
                "Flattermarken offers a valuable defense in digital document security. The application of a Flattermarken watermark to digital documents not only thwarts alterations and misappropriation but also enhances the ease of tracking and overseeing these documents.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Document management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC Aztec Code",
          url: 'hibc-aztec-code',
          type: "hibcazteccode",
          codeType: "QRCode",
          img:  "./img/code/HIBC Aztec Code.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC Aztec Code",
            description:
              "Free Online HIBC Aztec Code Generator: Create HIBC Aztec Codes for healthcare item tracking. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC Aztec Barcode, Healthcare Barcode Creator, Secure Code Generator",
          },
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC Codablock F",
          url: 'hibc-codablock-f',
          type: "hibccodablockf",
          codeType: "BarCode",
          img:  "./img/code/HIBC Codablock F.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC Codablock F",
            description:
              "Free Online HIBC Codablock F Barcode Generator: Efficiently generate HIBC Codablock F barcodes for medical labeling. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC Codablock F, Medical Barcode Maker, Free Online Barcode Generator",
          },
          rules: [
            "字符集：ASCII字符集，包括数字、字母和特殊字符",
            "长度：可变",
          ],
          en_rules: [
            "Character: The ASCII character set, including numbers, letters, and special characters",
            "Length:  Variable",
          ],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC Code 128",
          url: 'hibc-code-128',
          type: "hibccode128",
          codeType: "BarCode",
          img:  "./img/code/HIBC Code 128.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC Code 128",
            description:
              "Free Online HIBC Code 128 Barcode Generator: Create HIBC Code 128 barcodes for healthcare applications. Compliant with industry standards for drug and equipment labeling. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC Code 128, Healthcare Barcode, Drug Labeling Code, Equipment Barcode",
          },
          rules: [
            "字符集：ASCII字符集，包括数字、字母和特殊字符",
            "长度：可变",
          ],
          en_rules: [
            "Character: The ASCII character set, including numbers, letters, and special characters",
            "Length:  Variable",
          ],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC Code 39",
          url: 'hibc-code-39',
          type: "hibccode39",
          codeType: "BarCode",
          img:  "./img/code/HIBC Code 39.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC Code 39",
            description:
              "Free Online HIBC Code 39 Barcode Generator: Generate HIBC Code 39 barcodes for healthcare logistics with our online tool. Easy, fast, and ready for immediate use in any medical setting. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC Code 39, Medical Barcode Generator, Healthcare Logistics Barcode",
          },
          rules: [
            "字符集：ASCII字符集，包括数字、字母和特殊字符",
            "长度：可变",
          ],
          en_rules: [
            "Character: The ASCII character set, including numbers, letters, and special characters",
            "Length:  Variable",
          ],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC Data Matrix",
          url: 'hibc-data-matrix',
          type: "hibcdatamatrix",
          codeType: "QRCode",
          img:  "./img/code/HIBC Data Matrix.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC Data Matrix",
            description:
              "Free Online HIBC Data Matrix Code Generator: Create HIBC Data Matrix barcodes for secure medical product tracking. Our online generator is fast, reliable, and free for all healthcare providers.Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC Data Matrix, Secure Medical Barcode, Product Tracking Code",
          },
          rules: [],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC Data Matrix Rectangular",
          url: 'hibc-data-matrix-rectangular',
          type: "hibcdatamatrixrectangular",
          codeType: "QRCode",
          img:  "./img/code/HIBC Data Matrix Rectangular.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title:
              "Free Online Barcode Generator: HIBC Data Matrix Rectangular",
            description:
              "Free Online HIBC Data Matrix Rectangular Code Generator: Generate HIBC Data Matrix Rectangular barcodes for tight spaces on healthcare items. Use our tool for quick, compliant barcode creation .Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC Data Matrix Rect, Compact Healthcare Barcode, Free Barcode Maker",
          },
          rules: [],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC MicroPDF417",
          url: 'hibc-micropdf417',
          type: "hibcmicropdf417",
          codeType: "QRCode",
          img:  "./img/code/HIBC MicroPDF417.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC MicroPDF417",
            description:
              "Free Online HIBC MicroPDF417 Code Generator: Create HIBC MicroPDF417 barcodes for detailed medical data encoding with our online generator. Perfect for small item labeling in healthcare.  Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "HIBC MicroPDF417, Detailed Barcode Creation, Small Item Barcode",
          },
          rules: [],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC PDF417",
          url: 'hibc-pdf417',
          type: "hibcpdf417",
          codeType: "QRCode",
          img:  "./img/code/HIBC PDF417.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC PDF417",
            description:
              "Free Online HIBC PDF417 Code Generator: Generate HIBC PDF417 barcodes for comprehensive healthcare data storage. Our online tool provides quick and easy barcode solutions. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC PDF417, Comprehensive Data Barcode, Healthcare Code Generator",
          },
          rules: [],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "HIBC QR Code",
          url: 'hibc-qr-code',
          type: "hibcqrcode",
          codeType: "QRCode",
          img:  "./img/code/HIBC QR Code.png",
          defaultValue: "A999BJC5D6E71",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: HIBC QR Code",
            description:
              "Free Online HIBC QR Code Barcode Generator: Create HIBC QR Codes for fast scanning in medical environments with our free online generator. Reliable and compliant with healthcare standards. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "HIBC QR Code, Fast Scanning Barcode, Medical QR Code Maker",
          },
          eclevelList: [
            {
              value: "L",
              label: "Low(7%)",
            },
            {
              value: "M",
              label: "Medium(15%)",
            },
            {
              value: "Q",
              label: "Medium High(25%)",
            },
            {
              value: "H",
              label: "High(30%)",
            },
          ],
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "供应链管理",
              en_title: "Supply Chain Management",
              text: "HIBC条码广泛应用于医疗保健行业的供应链管理。通过使用HIBC条码，医疗机构和供应商可以更有效地追踪和管理产品，确保准确的数据识别和追溯。",
              en_text:
                "HIBC barcodes are widely used in supply chain management in the healthcare industry. By using HIBC barcodes, healthcare organizations and suppliers can track and manage products more effectively, ensuring accurate data identification and traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical logistics.png",
            },
            {
              title: "药品追溯",
              en_title: "Drug Traceability",
              text: "HIBC条码允许在医疗产品中编码批次信息和过期日期，使得供应链管理者能够更好地跟踪和管理医疗产品的有效期限，并在必要时采取相应的措施，如回溯和召回。",
              en_text:
                "HIBC barcodes allow batch information and expiration dates to be encoded in medical products, enabling supply chain managers to better track and manage the expiry dates of medical products and take appropriate actions such as backtracking and recalls when necessary.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug traceability.png",
            },
            {
              title: "医疗器械管理",
              en_title: "Medical Device Management",
              text: "HIBC条码可以用于医疗器械的管理。通过在医疗器械上印刷HIBC条码，可以方便医院或医疗机构对器械进行追踪和管理，例如器械的型号、生产日期、保质期、维修记录等信息。",
              en_text:
                "HIBC barcodes can be used for the management of medical devices. By printing HIBC barcodes on medical devices, it is convenient for hospitals or medical institutions to track and manage devices, such as device models, production dates, shelf life, maintenance records and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical device management.png",
            },
            {
              title: "医疗费用管理",
              en_title: "Medical Expense Management",
              text: "HIBC条码可以用于医疗费用管理。通过在医疗费用单据上印刷HIBC条码，可以方便医院或医疗机构对医疗费用进行追踪和管理，例如患者的姓名、就诊日期、诊断结果、医疗费用等信息。",
              en_text:
                "HIBC barcodes can be used for medical expense management. By printing the HIBC barcode on the medical expense document, it is convenient for the hospital or medical institution to track and manage the medical expenses, such as the patient's name, the date of treatment, the diagnosis result, the medical cost and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical expense management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Pharmazentralnummer (PZN)",
          url: 'pharmazentralnummer-pzn',
          type: "pzn",
          codeType: "BarCode",
          img:  "./img/code/Pharmazentralnummer (PZN).png",
          defaultValue: "1234562",
          buildLocally: true,
          head: {
            title: "Free Online Barcode Generator: Pharmazentralnummer (PZN)",
            description:
              "Free Online Pharmazentralnummer (PZN) Barcode Generator: Generate Pharmazentralnummer (PZN) barcodes for pharmaceutical products in Germany. Our tool ensures accuracy and compliance with German standards. Make printable, easy-to-scan, and ready-to-download barcodes now.",
            keywords:
              "PZN Barcode, Pharmaceutical Central Number, German Pharmacy Code",
          },
          rules: ["字符集：数字0-9", "长度：8位。"],
          en_rules: ["Character: Numbers 0-9", "Length: 8 bits"],
          introduceList: [
            {
              title: "药品销售",
              en_title: "Pharmaceutical Sales",
              text: "PZN可以用于药品的销售。通过在药品销售单据上印刷PZN，可以方便药店或医院对药品进行销售和管理，例如药品的销售数量、销售日期、销售价格等信息。",
              en_text:
                "PZN can be used for the sale of pharmaceutical products. By printing PZN on drug sales documents, it is convenient for pharmacies or hospitals to sell and manage drugs, such as the sales quantity, sales date, sales price and other information of drugs.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical packaging.png",
            },
            {
              title: "药品管理",
              en_title: "Drug Management",
              text: "PZN可以用于药品的管理。通过在药品包装或标签上印刷PZN，可以方便药店或医院对药品进行追踪和管理，例如药品的名称、成分、生产日期、批号、有效期等信息。",
              en_text:
                "PZN can be used for the management of pharmaceutical products. By printing PZN on pharmaceutical packaging or labels, it is convenient for pharmacies or hospitals to track and manage drugs, such as the name, ingredients, manufacturing date, batch number, expiration date and other information of the drug.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug management.png",
            },
            {
              title: "药品配送",
              en_title: "Pharmaceutical Distribution",
              text: "PZN可以用于药品的配送。通过在药品配送单据上印刷PZN，可以方便药品配送公司或医院对药品进行追踪和管理，例如药品的数量、配送日期、配送地址等信息。",
              en_text:
                "PZN can be used for the distribution of pharmaceutical products. By printing PZN on the drug distribution document, it is convenient for the drug distribution company or hospital to track and manage the drug, such as the quantity of the drug, the delivery date, the delivery address and other information.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical distribution.png",
            },
            {
              title: "药品统计",
              en_title: "Drug Statistics",
              text: "PZN可以用于药品的统计。通过对PZN进行统计分析，可以帮助政府或医疗机构了解药品的使用情况和市场需求，从而制定相应的政策和措施。",
              en_text:
                "PZN can be used for the statistics of pharmaceutical products. Through the statistical analysis of PZN, it can help the government or medical institutions understand the use of drugs and market demand, so as to formulate corresponding policies and measures.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Drug statistics.png",
            },
          ],
          tutorial: [],
        },
      ],
    },
    {
      title: "二维条码",
      en_title: "2D barcode",
      icon:  "./img/code/code-icon-6.png",
      children: [
        {
          title: "QR Code",
          url: 'qr-code',
          type: "qrcode",
          codeType: "QRCode",
          img:  "./img/code/QR Code.png",
          defaultValue: "01210012341",
          buildLocally: true,
          head: {
            title:
              "Free Online 2D QR Code Generator - Create Custom QR Codes Online",
            description:
              "Free Online QR Code Generator: Generate custom QR codes for personal or business use with our free online tool. Ideal for marketing, product info, and web links. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "QR Code Generator, Create QR Code, Free Online QR Maker, Custom QR Codes",
          },
          rules: [],
          en_rules: [],
          eclevelList: [
            {
              value: "L",
              label: "Low(7%)",
            },
            {
              value: "M",
              label: "Medium(15%)",
            },
            {
              value: "Q",
              label: "Medium High(25%)",
            },
            {
              value: "H",
              label: "High(30%)",
            },
          ],
          introduceList: [
            {
              title: "商品管理",
              en_title: "MerchAndise Management",
              text: "QR Code可以用于商品的管理。通过在商品包装或标签上印刷QR Code，可以方便商家对商品进行追踪和管理，例如商品的名称、价格、生产日期、批号、库存等信息。",
              en_text:
                "QR codes streamline goods management. Printed on packaging or labels, they enable merchants to effortlessly monitor product details like names, prices, production dates, batch numbers, and stock levels.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Merchandise management.png",
            },
            {
              title: "支付系统",
              en_title: "Payment System",
              text: "QR Code可以用于支付系统。通过在商家的收款二维码上印刷QR Code，可以方便消费者进行支付，例如扫描QR Code后直接通过手机完成支付。",
              en_text:
                "QR codes facilitate payments within payment systems. When merchants display QR codes for transactions, customers can swiftly pay by scanning with their mobile devices.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Payment system.png",
            },
            {
              title: "营销推广",
              en_title: "Marketing Promotion",
              text: "QR Code可以用于营销推广。通过在广告或宣传物料上印刷QR Code，可以方便消费者获取更多的信息，例如扫描QR Code后可以跳转到相关网页或视频。",
              en_text:
                "QR codes are effective tools for marketing promotions, providing instant access to additional information when scanned from ads or promotional items, leading to web pages or videos.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
            {
              title: "电子票务",
              en_title: "Electronic Ticketing",
              text: "QR Code可以用于电子票务。通过在电子票务二维码上印刷QR Code，可以方便消费者进行电子票务购买和使用，例如扫描QR Code后可以直接进入电影院或演出场馆。",
              en_text:
                "QR codes enhance e-ticketing processes, allowing consumers to buy and use electronic tickets easily, with a simple scan granting entry to cinemas or event spaces.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Electronic ticketing.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "PDF417",
          url: 'pdf417',
          type: "pdf417",
          codeType: "QRCode",
          img:  "./img/code/PDF417.png",
          defaultValue: "01210012341",
          buildLocally: true,
          head: {
            title: "Free PDF417 Barcode Generator ",
            description:
              "Free Online PDF417 Code Generator: Easily generate PDF417 barcodes for secure document encoding and identification. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "PDF417 Barcode Maker, Secure Barcode Generator, Free PDF417 Code",
          },
          eclevelList: [
            {
              value: 0,
              label: "L0",
            },
            {
              value: 1,
              label: "L1",
            },
            {
              value: 2,
              label: "L2",
            },
            {
              value: 3,
              label: "L3",
            },
            {
              value: 4,
              label: "L4",
            },
            {
              value: 5,
              label: "L5",
            },
            {
              value: 6,
              label: "L6",
            },
            {
              value: 7,
              label: "L7",
            },
            {
              value: 8,
              label: "L8",
            },
          ],
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "货物追踪",
              en_title: "Shipment Tracking",
              text: "PDF417可以用于货物追踪。通过在货物包装或标签上印刷PDF417，可以方便企业对货物进行追踪和管理，例如货物的名称、数量、生产日期、批号、运输信息等信息。",
              en_text:
                "PDF417 barcodes are instrumental for cargo tracking. Embedding them on goods' packaging or labels enables businesses to efficiently oversee details such as product names, quantities, production dates, batch numbers, and logistics data.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Inventory management.jpg",
            },
            {
              title: "门票管理",
              en_title: "Ticket Management",
              text: "PDF417可以用于门票管理。通过在门票二维码上印刷PDF417，可以方便活动主办方对门票进行管理，例如门票的名称、价格、有效期、购票人信息等信息。",
              en_text:
                "PDF417 barcodes streamline ticketing operations. When integrated with ticket QR codes, they assist organizers in managing critical ticket details including names, pricing, validity, and purchaser data.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Ticket management.png",
            },
            {
              title: "证件管理",
              en_title: "Document Management",
              text: "PDF417可以用于证件管理。通过在证件二维码上印刷PDF417，可以方便政府或机构对证件进行管理，例如身份证、驾驶证、护照等证件的个人信息、有效期等信息。",
              en_text:
                "PDF417 barcodes facilitate document control. Their inclusion on identification documents' QR codes aids governmental bodies in administering vital information like personal details and validity periods for IDs, driving licenses, and passports.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Document management (2).png",
            },
            {
              title: "金融行业",
              en_title: "Financial Industry",
              text: "PDF417可以用于金融行业。通过在银行卡或支票上印刷PDF417，可以方便银行对账户和交易进行管理，例如账户信息、交易金额、交易时间等信息。",
              en_text:
                "PDF417 barcodes enhance financial management. Printed on bank cards or checks, they enable institutions to adeptly handle account details, transaction values, and timings.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Financial industry.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Data Matrix",
          url: 'data-matrix',
          type: "datamatrix",
          codeType: "QRCode",
          img:  "./img/code/Data Matrix.png",
          defaultValue: "01210012341",
          buildLocally: true,
          head: {
            title: "Free Data Matrix Code Generator",
            description:
              "Free Online Data Matrix Code Generator. Create Data Matrix codes for efficient asset and data management with our free online generator. Perfect for small spaces and large data amounts. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "Data Matrix Generator, 2D Barcode Maker, Free Online Code Creator",
          },
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "Data Matrix可以用于制造业。通过在制造产品上印刷Data Matrix，可以方便企业对产品进行追踪和管理，例如产品的型号、生产日期、批号、生产工艺等信息。",
              en_text:
                "Data Matrix codes are valuable in manufacturing for tracking and managing detailed product information such as models, production dates, batch numbers, and manufacturing processes when printed on products.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "物流管理",
              en_title: "Logistics Management",
              text: "Data Matrix可以用于物流管理。通过在物流包装或标签上印刷Data Matrix，可以方便企业对物流进行追踪和管理，例如物流的起点、终点、运输方式、运输时间等信息。",
              en_text:
                "Data Matrix codes enhance logistics management by providing critical tracking details like origin, destination, transportation methods, and timings when applied to packaging or labels.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry.png",
            },
            {
              title: "文档管理",
              en_title: "Document Management",
              text: "Data Matrix可以用于文档管理。通过在文档上印刷Data Matrix，可以方便企业对文档进行管理，例如文档的名称、版本、作者、创建时间等信息。",
              en_text:
                "Data Matrix codes facilitate document management, allowing for the efficient organization of document attributes such as names, versions, authors, and creation dates when printed on documents.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Document management.png",
            },
            {
              title: "货架管理",
              en_title: "Shelf Management",
              text: "Data Matrix可以用于货架管理。通过在货架上印刷Data Matrix，可以方便商店或超市对货架进行管理，例如货架的位置、商品的名称、价格、库存等信息。",
              en_text:
                "Data Matrix codes assist in shelf management by providing easy access to information like shelf location, product names, prices, and stock levels when printed on store or supermarket shelves.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce management.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "Aztec Code",
          url: 'aztec-code',
          type: "azteccode",
          codeType: "QRCode",
          img:  "./img/code/Aztec Code.png",
          defaultValue: "01210012341",
          buildLocally: true,
          head: {
            title:
              "Free Aztec Code Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online Aztec Code Generator: Generate Aztec codes with our free online tool, ideal for transportation tickets and secure business processes. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "Aztec Code Generator, Compact Barcode Creator, Free Aztec Barcode",
          },
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "电子票务",
              en_title: "Electronic Ticketing",
              text: "Aztec Code可以用于电子票务。通过在电子票务二维码上印刷Aztec Code，可以方便消费者进行电子票务购买和使用，例如扫描Aztec Code后可以直接进入电影院或演出场馆。",
              en_text:
                "The Aztec Code is optimal for e-ticketing solutions. When printed alongside the e-ticket's QR code, it streamlines the ticket purchase and admission process, enabling guests to scan and gain immediate entry to cinemas or venues.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Electronic ticketing.png",
            },
            {
              title: "支付系统",
              en_title: "Payment System",
              text: "Aztec Code可以用于支付系统。通过在商家的收款二维码上印刷Aztec Code，可以方便消费者进行支付，例如扫描Aztec Code后直接通过手机完成支付。",
              en_text:
                "The Aztec Code simplifies transactions in payment systems. Incorporated into a merchant's payment QR code, it offers a quick scan-and-pay option via smartphones for consumer convenience.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Payment system.png",
            },
            {
              title: "物流管理",
              en_title: "Logistics Management",
              text: "Aztec Code可以用于物流管理。通过在物流包装或标签上印刷Aztec Code，可以方便企业对物流进行追踪和管理，例如物流的起点、终点、运输方式、运输时间等信息。",
              en_text:
                "Aztec Codes significantly enhance logistics management by enabling companies to trace and oversee logistical details—like origin, destination, mode of transport, and delivery timelines—when applied to packaging or labels.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry.png",
            },
            {
              title: "货架管理",
              en_title: "Shelf Management",
              text: "Aztec Code可以用于货架管理。通过在货架上印刷Aztec Code，可以方便商店或超市对货架进行管理，例如货架的位置、商品的名称、价格、库存等信息。",
              en_text:
                "For retail shelf management, the Aztec Code is invaluable. Printed directly on shelving, it assists stores and supermarkets in monitoring shelf placement, product identification, pricing, and stock levels.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/E-commerce management.png",
            },
          ],
          tutorial: [],
        },
      ],
    },
    {
      title: "GS1 二维码",
      en_title: "GS1 QR code",
      icon:  "./img/code/code-icon-6.png",
      children: [
        {
          title: "GS1 QR Code",
          url: 'gs1-qr-code',
          type: "gs1qrcode",
          codeType: "QRCode",
          img:  "./img/code/GS1 QR Code.png",
          defaultValue: "(01)09521234543213(8200)http://www.abc.net",
          buildLocally: true,
          head: {
            title:
              "Free GS1 QR Code Generator: Instantly Make Barcodes and Download for Free",
            description:
              "Free Online GS1 QR Code Generator: Create GS1-compliant QR codes for business and retail needs with our free online tool. Enhance your supply chain efficiency and transparency. Make printable, easy-to-scan, and ready-to-download QR Codes now.",
            keywords:
              "GS1 QR Code, Industry Standard QR Maker, Free QR Barcode Generator",
          },
          eclevelList: [
            {
              value: "L",
              label: "Low(7%)",
            },
            {
              value: "M",
              label: "Medium(15%)",
            },
            {
              value: "Q",
              label: "Medium High(25%)",
            },
            {
              value: "H",
              label: "High(30%)",
            },
          ],
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "防伪溯源",
              en_title: "Anti-counterfeiting Traceability",
              text: "GS1 QR Code可以用于防伪溯源。通过在商品包装或标签上印刷GS1 QR Code，可以方便消费者对商品的真伪进行查询，例如通过扫描GS1 QR Code可以查询商品的生产地、生产日期、批号等信息，确保商品的真实性和安全性。",
              en_text:
                "The GS1 QR Code serves as a tool for anti-counterfeit tracking. When imprinted on product packaging or labels, it allows consumers to verify product authenticity by scanning to access details such as the place of manufacture, production date, and batch number, thus ensuring product integrity and safety.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Anti-counterfeiting of goods.png",
            },
            {
              title: "商品管理",
              en_title: "MerchAndise Management",
              text: "GS1 QR Code可以用于商品的管理。通过在商品包装或标签上印刷GS1 QR Code，可以方便商家对商品进行追踪和管理，例如商品的名称、价格、生产日期、批号、库存等信息。",
              en_text:
                "The GS1 QR Code is instrumental in goods management. Affixed to product packaging or labels, it enables merchants to seamlessly monitor and control aspects like product name, pricing, manufacture date, batch number, and stock levels.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Merchandise management.png",
            },
            {
              title: "物流管理",
              en_title: "Logistics Management",
              text: "GS1 QR Code可以用于物流管理。通过在物流包装或标签上印刷GS1 QR Code，可以方便企业对物流进行追踪和管理，例如物流的起点、终点、运输方式、运输时间等信息。",
              en_text:
                "The GS1 QR Code enhances logistics management. Printed on logistical packaging or labels, it facilitates enterprise oversight of shipping routes, including points of origin and destination, transport means, and delivery schedules.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry.png",
            },
            {
              title: "营销推广",
              en_title: "MarketingPromotion",
              text: "GS1 QR Code可以用于营销推广。通过在广告或宣传物料上印刷GS1 QR Code，可以方便消费者获取更多的信息，例如扫描GS1 QR Code后可以跳转到相关网页或视频，了解更多产品信息和促销活动。",
              en_text:
                "The GS1 QR Code is effective for promotional marketing. Incorporated into advertisements or marketing collateral, it grants consumers quick access to expanded information like product details and promotional activities by directing to associated web pages or videos upon scanning.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 Data Matrix",
          url: 'gs1-data-matrix',
          type: "gs1datamatrix",
          codeType: "QRCode",
          img:  "./img/code/GS1 Data Matrix.png",
          defaultValue: "(01)09521234543213(3103)000123",
          buildLocally: true,
          head: {
            title: "Free GS1 Data Matrix Generator",
            description:
              "Free Online GS1 Data Matrix Generator: Generate GS1 Data Matrix barcodes for precise tracking and tracing in business and healthcare with our online generator. Accurate and compliant. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Data Matrix, Business Barcode Creator, Healthcare Code Generator",
          },
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "医疗保健行业",
              en_title: "Healthcare Industry",
              text: "GS1 Data Matrix常用于医疗设备和药品的标识。它可以存储大量的数据，如产品代码、批次号和有效期，从而确保患者安全和追溯性。",
              en_text:
                "The GS1 Data Matrix is integral for labeling medical equipment and pharmaceutical products, capable of encoding extensive data such as product codes, lot numbers, and expiry dates to safeguard patient health and ensure traceability.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Pharmaceutical and health care industry.png",
            },
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "在零售行业中，GS1 Data Matrix可以用于商品的标签和包装，以提供更多的产品信息和促进库存管理。",
              en_text:
                "In the retail industry, GS1 Data Matrix can be used for the labeling and packaging of merchandise to provide more product information and facilitate inventory management.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "制造业",
              en_title: "Manufacturing",
              text: "在制造业中，GS1 Data Matrix可以用于跟踪零件和组件，确保生产过程的质量和效率。",
              en_text:
                "In manufacturing, GS1 Data Matrix can be used to track parts and assemblies to ensure quality and efficiency in the production process.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/manufacturing.png",
            },
            {
              title: "物流和供应链",
              en_title: "Logistics And Supply Chain",
              text: "GS1 Data Matrix可以用于跟踪货物的移动，从而提高供应链的透明度和效率。",
              en_text:
                "GS1 Data Matrix can be used to track the movement of goods, thereby increasing transparency and efficiency in the supply chain.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics supply chain.png",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 Digital Link QR Code",
          url: 'gs1-digital-link-qr-code',
          type: "gs1dlqrcode",
          codeType: "QRCode",
          img:  "./img/code/GS1 Digital Link QR Code.png",
          defaultValue:
            "https://id.gs1.org/01/09521234543213/22/ABC%2d123?99=XYZ%2f987",
          buildLocally: true,
          head: {
            title: "Free GS1 Digital Link QR Code Generator",
            description:
              "Free Online GS1 Digital Link QR Code Generator: Create GS1 Digital Link QR Codes to embed extended product information accessible with a scan. Our tool helps you leverage the power of smart packaging. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Digital Link, QR Code Business Solutions, Smart Packaging Barcode",
          },
          eclevelList: [
            {
              value: "L",
              label: "Low(7%)",
            },
            {
              value: "M",
              label: "Medium(15%)",
            },
            {
              value: "Q",
              label: "Medium High(25%)",
            },
            {
              value: "H",
              label: "High(30%)",
            },
          ],
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "零售",
              en_title: "Retail",
              text: "GS1 Digital Link QR Code为消费者提供即时的产品信息访问。通过简单的扫描，消费者可以了解产品详情和真伪验证，从而增强购物信心。",
              en_text:
                "The GS1 Digital Link QR Code offers immediate product insights to consumers. A straightforward scan reveals essential product specifics and verification of authenticity, bolstering consumer trust.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
            {
              title: "医疗",
              en_title: "Medical",
              text: "GS1 Digital Link QR Code在医疗领域确保了药品和设备的追溯性。医护人员和患者可以快速获取产品的生产批次和有效期，确保治疗的安全性。",
              en_text:
                "In healthcare, the GS1 Digital Link QR Code guarantees traceability for medications and devices. Healthcare professionals and patients can promptly retrieve critical information like production batches and expiry dates, securing treatment safety.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical industry.jpg",
            },
            {
              title: "物流",
              en_title: "Logistics",
              text: "GS1 Digital Link QR Code在物流中实现了货物的实时追踪。物流公司和客户都可以通过扫描了解货物状态，提高服务效率。",
              en_text:
                "The GS1 Digital Link QR Code allows for the real-time tracking of merchandise within logistics. Both logistics firms and clients can gauge the current status of items through scans, enhancing service efficacy.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry.png",
            },
            {
              title: "营销推广",
              en_title: "Marketing Promotion",
              text: "GS1 Digital Link QR Code可以用于营销推广。通过在广告或宣传物料上印刷GS1 Digital Link QR Code，可以方便消费者获取更多的信息，例如扫描GS1 Digital Link QR Code后可以跳转到相关网页或视频，了解更多产品信息和促销活动。",
              en_text:
                "For marketing initiatives, the GS1 Digital Link QR Code is a valuable asset. Displayed on promotional media, it provides consumers with a gateway to additional content, from product specifics to promotional details, by redirecting to pertinent web pages or videos upon scanning.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Marketing promotion.jpg",
            },
          ],
          tutorial: [],
        },
        {
          title: "GS1 Digital Link Data Matrix",
          url: 'gs1-digital-link-data-matrix',
          type: "gs1dldatamatrix",
          codeType: "QRCode",
          img:  "./img/code/GS1 Digital Link Data Matrix.png",
          defaultValue:
            "https://id.gs1.org/01/09521234543213/22/ABC%2d123?99=XYZ%2f987",
          buildLocally: true,
          head: {
            title: "Free GS1 Digital Link Data Matrix Generator",
            description:
              "Free Online GS1 Digital Link Data Matrix Generator: Generate GS1 Digital Link Data Matrix barcodes for advanced product information, including traceability and authenticity. Make all 1D and 2D barcodes—Error-free, printable, easy to scan, download in JPG, PNG, GIF, SVG. ",
            keywords:
              "GS1 Data Matrix, Digital Link Barcode, Traceability Code Maker",
          },
          rules: [],
          en_rules: [],
          introduceList: [
            {
              title: "医疗行业",
              en_title: "Medical Industry",
              text: "GS1 Digital Link Data Matrix用于追踪医疗设备和药品，确保医护人员迅速获取关键信息，如生产日期和过期日期，保障患者安全。",
              en_text:
                "The GS1 Digital Link Data Matrix is crucial for the tracking of medical devices and drugs, allowing healthcare providers to swiftly obtain essential data like manufacture and expiry dates, critical for patient safety.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Medical industry.jpg",
            },
            {
              title: "零售行业",
              en_title: "Retail Industry",
              text: "GS1 Digital Link Data Matrix在零售中用于商品追踪。消费者扫描可获取商品详情，如产地和使用方法，增强购物体验。",
              en_text:
                "In retail, the GS1 Digital Link Data Matrix aids in product tracking. Scanning by consumers provides immediate information on product origins and usage instructions, thus improving the shopping journey.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/retail.jpg",
            },
            {
              title: "食品行业",
              en_title: "Food Industry",
              text: "GS1 Digital Link Data Matrix追踪食品来源和安全信息。消费者扫描可了解食品产地和成分，确保食品安全。",
              en_text:
                "The GS1 Digital Link Data Matrix tracks the provenance and safety details of food items. Scans by consumers yield insights into the food's origin and composition, affirming food safety.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Food industry.png",
            },
            {
              title: "物流行业",
              en_title: "Logistics Industry",
              text: "在物流中，该二维码用于包裹追踪，提供包裹的来源、目的地和运输状态，提高物流效率。",
              en_text:
                "In logistics, this QR code is used for parcel tracking, providing the source, destination, and shipping status of the parcel, improving logistics efficiency.",
              img: "https://foreverfile.hprtcloud.com/barcode/20231108/Logistics industry (2).png",
            },
          ],
          tutorial: [],
        },
      ],
    },
  ];
};
