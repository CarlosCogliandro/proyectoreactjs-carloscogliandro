// import televisor from './images/televisor.png';
// import tostadora from './images/tostadora.png';
// import heladera from './images/heladera.png';
// import cocina from './images/cocina.png';
// import pava from './images/pava.png';
// import notebook from './images/notebook.png';
// import aire from './images/aire.png';


const data = [{
    id: '1',
    tittle: 'Televisor',
    price: 53000,
    image: 'https://www.electronicapks.com/wp-content/uploads/2020/05/radiola.jpg',
    parrafo:'Smart TV Samsung Series 7 UN43AU7000GCZB LED 4K 43" 220V - 240V',
    categoria: 'electrodomesticos',
    stock: 5,
    },
{
    id: '2',
    tittle: 'Tostadora',
    price: 1980,
    image: 'https://mitiendaoster.vteximg.com.br/arquivos/ids/156366-1000-1000/006544-1.jpg?v=635978999866800000',
    parrafo:'Tostadora Moulinex Vita IL56981556L 7 Niveles De Tostado color Blanco ',
    categoria: 'electrodomesticos',
    stock: 8,
},
{
    id: '3',
    tittle: 'Cocina',
    price: 22600,
    image: 'https://th.bing.com/th/id/OIP.2GRSnswtfnVCuw9tsQv8HAHaHa?pid=ImgDet&rs=1',
    parrafo:'Cocina Whirlpool WFX57DI gas natural 4 hornallas inoxidable puerta con visor',
    categoria: 'electrodomesticos',
    stock: 11,
},
{
    id: '4',
    tittle: 'Heladera',
    price: 73000,
    image: 'https://th.bing.com/th/id/R.422fa06e3108ad3e247d9cac8c12832f?rik=R0bUu3jIXj7HJQ&pid=ImgRaw&r=0',
    parrafo: 'Heladera no frost Peabody PE-SBS67 acero inoxidable con freezer 516L',
    categoria: 'electrodomesticos',
    stock: 2,
},
{
    id: '5',
    tittle: 'Pava Eléctrica',
    price: 2650,
    image: 'https://th.bing.com/th/id/R.90654d7343f52ed947587377e3ce55b8?rik=bF73JaBSJSGZzg&pid=ImgRaw&r=0',
    parrafo:'Pava eléctrica Peabody PE-DK17411 Smartchef acero inoxidable 1.7L',
    categoria: 'electrodomesticos',
    stock: 16,
},
{
    id: '6',
    tittle: 'Notebook',
    price: 29900,
    image: 'https://th.bing.com/th/id/R.a6a23c304c67cb7b7d82c66a70ff17ce?rik=JUF27y9lHAkhRQ&pid=ImgRaw&r=0',
    parrafo:'Notebook Asus X515EA slate gray 15.6", Intel Core i3 1115G4 4GB de RAM 256GB SSD',
    categoria: 'computacion',
    stock: 16,
},
{
    id: '7',
    tittle: 'Aire Acondicionado',
    price: 19350,
    image: 'https://img.pccomponentes.com/articles/39/392009/1396-infiniton-split-6224na-aire-acondicionado-split-inverter-con-bomba-de-calor-7200-frigorias.jpg',
    parrafo:'Aire acondicionado Carrier split inverter frío/calor 4506 frigorías blanco 220V 53HVA1801F',
    categoria: 'electrodomesticos',
    stock: 16,
},
{
    id: '8',
    tittle: 'Joystick Playstation 5',
    price: 27599,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_991801-MLA44330912940_122020-F.webp',
    parrafo: 'Joystick Inalambrico Sony Playstation 5 Dualsense Ps5 Nuevo',
    categoria: 'entretenimiento',
    stock: 17,
},
{
    id: '9',
    tittle: 'PlayStation 5 ',
    price: 299999,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_841787-MLA44484414455_012021-F.webp',
    parrafo: 'Sony PlayStation 5 825GB Standard color blanco y negro',
    categoria: 'entretenimiento',
    stock: 5,
},
{
    id: '10',
    tittle: 'Secador de pelo',
    price: 9751,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_774480-MLA46885024372_072021-F.webp',
    parrafo: 'Secador de pelo Remington Silk AC9096 rojo 220V - 240V',
    categoria: 'belleza',
    stock: 3,
},
{
    id: '11',
    tittle: 'Planchita de pelo',
    price: 7990,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_672902-MLA42521954521_072020-F.webp',
    parrafo: 'Planchita de pelo GA.MA Italy Bella Tourmaline Red Ion negra y roja 110V/220V',
    categoria: 'belleza',
    stock: 32,
},
{
    id: '12',
    tittle: 'Mouse Inalambrico',
    price: 2340,
    image: 'https://th.bing.com/th/id/OIP.yZmhsZ4VsHgYpgJ69Za5DQHaHa?w=213&h=213&c=7&r=0&o=5&dpr=1.25&pid=1.7',
    parrafo: 'Mouse inalámbrico Logitech M280 negro',
    categoria: 'computacion',
    stock: 31,
},
{
    id: '13',
    tittle: 'Batidora de pie',
    price: 31795,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_698516-MLA48851467017_012022-F.webp',
    parrafo: 'Batidora de pie Gadnic Cuk B52 BATI000X negra 220 V',
    categoria: 'electrodomesticos',
    stock: 6,
},
{
    id: '14',
    tittle: 'Cafetera ATMA',
    price: 6999,
    image: 'https://http2.mlstatic.com/D_NQ_NP_2X_626181-MLA41152215671_032020-F.webp',
    parrafo: 'Cafetera Atma Desayuno CA8143 semi automática negra de filtro 220V',
    categoria: 'electrodomesticos',
    stock: 9,
},
{
    id: '15',
    tittle: 'Teclado Inalambrico',
    price: 20465,
    image: 'https://thumb.pccomponentes.com/w-530-530/articles/5/52787/1729-logitech-wireless-keyboard-k270-negro-comprar.jpg',
    parrafo: 'Teclado bluetooth Logitech Master Series MX Keys QWERTY español España color grafito con luz blanca',
    categoria: 'computacion',
    stock: 12,
},
]

export default data;