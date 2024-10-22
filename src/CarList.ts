import {Car} from "./Car.ts";

export let cars: Car[];

cars = [
	{
		name: "Renault Capture",
		engine: "1.3/1.6H",
		power: 145,
		price: "100,000 - 120,000",
		comments: "idealna wielkość, super nowocześnie wygląda, ma hybrydę",
		otomotoUrl: "https://www.otomoto.pl/osobowe/renault/captur/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/32oMny2CFxVru9ta6",
		imageUrls: ["/src/assets/capture.jpeg", "src/assets/captureInt2.jpeg"]
	},
	{
		name: "Toyota CHR",
		engine: "1.5H",
		power: 130,
		price: "103,000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/toyota/c-hr?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/t9sbBjjfVKXTdoVr5",
		imageUrls: ["/src/assets/chr.jpg", "/src/assets/chrInt2.jpeg"]
	},
	{
		name: "Dacia Daster",
		engine: "1.6H",
		power: 140,
		price: "115 000-120 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/dacia/duster?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2024&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/NoabLVEm31uSr9AVA",
		imageUrls: ["/src/assets/daster.jpg", "src/assets/dasterInt.jpeg"]
	},
	{
		name: "Hyundai i20",
		engine: "1.0",
		power: 100,
		price: "115 000-120 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/i20/od-2024?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2020&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/kK5Nhvgi429xzZKV8",
		imageUrls: ["/src/assets/i20.jpeg", "src/assets/i20Int.jpeg", "src/assets/i202.jpg"]
	},
	{
		name: "Hyundai i30",
		engine: "1.3/1.6 160/145KM",
		power: 190,
		price: "115 000-120 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/i30?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/3cLPec8HZTpCL3zL9",
		imageUrls: ["/src/assets/i30.jpeg", "src/assets/i30Int.jpeg", "src/assets/i30Back.jpeg"]
	},
	{
		name: "Nissan Juke",
		engine: "1.3/1.6 160/145KM",
		power: 190,
		price: "115 000-120 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/nissan/juke?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/zuEAUtpPiqkHPExa7",
		imageUrls: ["/src/assets/juke.jpeg", "/src/assets/juke2.jpeg", "src/assets/jukeInt.jpeg", "src/assets/jukeInt2.jpeg", "/src/assets/jukeBack.jpeg"]
	},
	{
		name: "Hyundai Kona",
		engine: "1.0/1.6H",
		power: 120,
		price: "110 000-117 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/hyundai/kona?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/cx6CwWHHVMep2wxA6",
		imageUrls: ["/src/assets/kona.jpeg", "src/assets/konaInt2.jpeg", "src/assets/konaBack.jpeg" ]
	},
	{
		name: "MG MG3",
		engine: "1.5H",
		power: 195,
		price: "115 000-120 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mg/mg3?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/BCEVV8UTKFfmKiVr5",
		imageUrls: ["/src/assets/mg3.jpeg", "src/assets/mg3Int.jpeg", "src/assets/mg3Int2.jpg"]
	},
	{
		name: "Nissan Qashqai",
		engine: "1.3/1.6 160/145KM",
		power: 190,
		price: "115,000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/nissan/qashqai?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-iii-2021&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/Gotkx6i3az5LyugEA",
		imageUrls: ["/src/assets/qashqai.jpeg", "src/assets/qashqaiInt.jpeg", "src/assets/qashqaiBack.jpeg"]
	},
	{
		name: "Dacia Stepway",
		engine: "0.9",
		power: 90,
		price: "84,000",
		comments: "TANIE A DOBRE!!!",
		otomotoUrl: "https://www.dacia.pl/katalog-nci.html?CAMPAIGN=pl-pl-d-l-def-brand-all_products-ice-go-classic-aTAGnHHs-&ORIGIN=paid_search&gad_source=1&gclid=Cj0KCQjw99e4BhDiARIsAISE7P8NUUXiK6yMB6cAlVbTp39Ve5xUwDRn6OlJ-j79rPj_u-7AIXZPE8IaAr5JEALw_wcB&gclsrc=aw.ds&model.code=BI1&sortKey=prices.discountedPriceWithTaxes&sortOrder=%2B&transmission.group=AUTOMATIC&utm_campaign=pl-pl-d-l-def-brand-all_products-ice-go-classic-aTAGnHHs-&utm_id=17630383397&utm_medium=cpc&utm_source=google",
		wwwExample: "https://images.app.goo.gl/MnokgV49SN6644ds5",
		imageUrls: ["/src/assets/stepway.png", "/src/assets/stepwayInt2.jpeg", "/src/assets/stepwayBack.jpeg"]
	},
	{
		name: "Suzuki Swift",
		engine: "1.0",
		power: 83,
		price: "115 000-120 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/suzuki/swift?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_enum_generation%5D=gen-vii-2024&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/MnokgV49SN6644ds5",
		imageUrls: ["/src/assets/swift.jpeg", "src/assets/swiftInt.jpg", "src/assets/swiftBack.jpeg"]
	},
	{
		name: "Suzuki Vitara",
		engine: "1.5H",
		power: 130,
		price: "115 000-120 000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/suzuki/vitara?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/5SGiB2CPuSbgXDk78",
		imageUrls: ["/src/assets/vitara.jpeg", "src/assets/vitaraInt.jpeg", "src/assets/vitaraBack.jpeg", "src/assets/vitaraBack2.jpeg"]
	},
	{
		name: "Toyota Yaris Cross",
		engine: "1.5H",
		power: 130,
		price: "103,000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/toyota/yaris-cross?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/e4dF3x2Ujg4qMSbX9",
		imageUrls: ["/src/assets/yarisCross.jpeg", "src/assets/yarisCrossInt.jpeg", "src/assets/yarisCrossBack.jpeg"]
	},
	{
		name: "Toyota Yaris",
		engine: "1.5",
		power: 125,
		price: "90,000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/toyota/yaris?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_enum_gearbox%5D=automatic&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://images.app.goo.gl/TUFmCK7HyhHNJ7Cg9",
		imageUrls: ["/src/assets/yaris.jpg", "src/assets/yarisInt.jpeg"]
	},
	{
		name: "MG ZS",
		engine: "???",
		power: 0,
		price: "105,000",
		comments: "Wersja sportowa",
		otomotoUrl: "https://www.otomoto.pl/osobowe/mg/zs?search%5Bfilter_enum_country_origin%5D=pl&search%5Bfilter_enum_damaged%5D=0&search%5Bfilter_enum_fuel_type%5D%5B0%5D=petrol&search%5Bfilter_enum_fuel_type%5D%5B1%5D=petrol-cng&search%5Bfilter_enum_fuel_type%5D%5B2%5D=petrol-lpg&search%5Bfilter_enum_fuel_type%5D%5B3%5D=diesel&search%5Bfilter_enum_fuel_type%5D%5B4%5D=etanol&search%5Bfilter_enum_fuel_type%5D%5B5%5D=hybrid&search%5Bfilter_enum_fuel_type%5D%5B6%5D=plugin-hybrid&search%5Bfilter_enum_fuel_type%5D%5B7%5D=hidrogen&search%5Bfilter_float_mileage%3Ato%5D=100&search%5Border%5D=filter_float_price%3Aasc&search%5Badvanced_search_expanded%5D=true",
		wwwExample: "https://www.youtube.com/watch?app=desktop&v=z_kZuv5GnN8",
		imageUrls: ["/src/assets/zs.jpeg", "src/assets/zsInt.jpeg"]
	},
];