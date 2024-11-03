import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Promo data (can be fetched from API in a real application)
const promos = [
  { 
    id: 1, 
    title: "Saldo Gratis!", 
    description: "Saldo SMS PPOB gratis maksimal Rp25.000 untuk pengguna pertama", 
    bgColor: "bg-red-500", 
    banner:"/assets/Banner-1.png" 
  },
  { 
    id: 2, 
    title: "Diskon listrik!", 
    description: "Diskon untuk setiap pembayaran listrik prabayar/pasca bayar 10%", 
    bgColor: "bg-pink-500", 
    banner:"/assets/Banner-2.png" 
  },
  { 
    id: 3, 
    title: "Promo makan!", 
    description: "Dapatkan voucher makan di restoran favorit Anda dengan melakukan transaksi disini!", 
    bgColor: "bg-blue-500", 
    banner:"/assets/Banner-3.png"
  },
  { 
    id: 4, 
    title: "Cashback 25%!", 
    description: "Cashback untuk setiap pembayaran voucher game diatas Rp100.000", 
    bgColor: "bg-purple-500",
    banner:"/assets/Banner-4.png" 
  },
  { 
    id: 5, 
    title: "Buy 1 Get 2!", 
    description: "Dapatkan dua bulan gratis untuk setiap pembelian satu bulan berlangganan televisi.", 
    bgColor: "bg-green-500", 
    banner:"/assets/Banner-5.png" 
  },
];

const services = [
  { name: 'PBB', icon: '/assets/PBB.png' },
  { name: 'Listrik', icon: '/assets/Listrik.png' },
  { name: 'Pulsa', icon: '/assets/Pulsa.png' },
  { name: 'PDAM', icon: '/assets/PDAM.png' },
  { name: 'PGN', icon: '/assets/PGN.png' },
  { name: 'TV Langganan', icon: '/assets/Televisi.png' },
  { name: 'Musik', icon: '/assets/Musik.png' },
  { name: 'Voucher Game', icon: '/assets/Game.png' },
  { name: 'Voucher Makanan', icon: '/assets/food.png' },
  { name: 'Kurban', icon: '/assets/Kurban.png' },
  { name: 'Zakat', icon: '/assets/Zakat.png' },
  { name: 'Paket Data', icon: '/assets/kuota.png' },
];

const Home = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <header className="flex justify-between items-center mb-6">
      <div className="flex flex-row items-center">
            <img src="./assets/Logo.png" alt="SIMS PPOB" className="h-12 mb-4 px-2" />
            <a href="/home" className="text-xl font-semibold text-gray-800 mb-6 text-decoration-none">SIMS PPOB</a>
      </div>
        <div className="flex items-center space-x-4 border-l border-gray-300 pl-4 ">
          <span>Top Up</span>
          <span>Transaction</span>
          <a href="/profile" className="text-xl text-gray-800 text-decoration-none">Akun</a>
        </div>
      </header>

      <div className="flex items-center mb-6">
  {/* Section pertama*/}
  <section className="flex flex-col items-center space-y-1 w-1/3">
    <img src="/assets/pp.png" alt="Profile" className="h-10 w-10 rounded-full" />
    <h2 className="text-lg font-bold">Selamat Datang,</h2>
    <h2 className="text-lg font-bold">NAMA USER</h2>
  </section>
  
  {/* Section kedua */}
  <section className="flex-grow ml-4 p-4 bg-red-600 rounded-lg text-white flex items-center">
    <div>
      <h2 className="text-lg font-bold">Saldo anda</h2>
      <p className="text-2xl">Rp ••••••</p>
      <button className="mt-1 text-sm underline">Lihat Saldo</button>
    </div>
  </section>
</div>

      {/* Services */}
<section className="grid grid-cols-12 gap-4 mb-8">
  {services.map(service => (
    <div key={service.name} className="w-full h-16 p-2 bg-gray-100 rounded-lg flex flex-col items-center">
      <img src={service.icon} alt={service.name} className="h-6 w-6 mb-1" />
      <span className="text-xs text-center">{service.name}</span>
    </div>
  ))}
</section>


      {/* Promo Slider */}
      <section className="mb-8">
  <h2 className="text-xl font-semibold mb-4">Temukan promo menarik</h2>
  <Slider {...sliderSettings}>
    {promos.map((promo) => (
      <div key={promo.id} className={`p-2 ${promo.bgColor} rounded-lg text-white flex flex-col items-center`}>
        <h3 className="text-lg font-bold">{promo.title}</h3>
        <p className="text-sm text-center mt-1">{promo.description}</p>
        <img src={promo.banner} alt={promo.title} className="h-40 w-full object-cover mt-4" />
      </div>
    ))}
  </Slider>
</section>
    </div>
  );
};

export default Home;
