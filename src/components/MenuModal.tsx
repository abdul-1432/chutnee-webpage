import React from 'react';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { name: 'Pani Puri', price: '£6.50', time: '10 mins', badges: ['Spicy'], origin: 'Mumbai Street Food', ingredients: 'Chickpeas, Tamarind, Spices, Yogurt', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494874119_769c65d4.png' },
  { name: 'Chicken Burger', price: '£9.00', time: '15 mins', badges: ["Chef's Special"], origin: 'Fusion', ingredients: 'Chicken, Lettuce, Tomato, Special Sauce', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494879976_ada958a8.png' },
  { name: 'Biryani', price: '£12.00', time: '20 mins', badges: ['Spicy'], origin: 'Hyderabad, India', ingredients: 'Basmati Rice, Chicken, Saffron, Spices', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494891147_36a0e503.png' },
  { name: 'Mango Lassi', price: '£4.50', time: '5 mins', badges: ['Vegan Option'], origin: 'North India', ingredients: 'Mango, Yogurt, Cardamom, Sugar', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494886004_65fa7e01.png' },
  { name: 'Chai Tea', price: '£3.50', time: '5 mins', badges: ['Traditional'], origin: 'All India', ingredients: 'Black Tea, Milk, Cardamom, Ginger', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494871116_1a847f41.png' },
  { name: 'Chocolate Cake', price: '£5.50', time: '2 mins', badges: ["Chef's Special"], origin: 'House Special', ingredients: 'Chocolate, Butter, Eggs, Sugar', img: 'https://d64gsuwffb70l.cloudfront.net/68fe45e7ff61bce6635ea1af_1761494892899_8bb276b7.png' }
];

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="font-['Bebas_Neue'] text-4xl font-bold text-[#E91E8C] tracking-[2px] mb-8">OUR MENU</h2>

        <div className="space-y-6">
          {menuItems.map((item, idx) => (
            <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all">
              <img src={item.img} alt={item.name} className="w-32 h-32 rounded-lg object-cover flex-shrink-0" />
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-['Bebas_Neue'] text-2xl font-bold text-[#2B2D42]">{item.name}</h3>
                  <span className="font-['Poppins'] text-xl font-bold text-[#E91E8C]">{item.price}</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-sm text-gray-500 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.time}
                  </span>
                  {item.badges.map((badge, i) => (
                    <span key={i} className="px-2 py-1 bg-[#FFE8F5] text-[#E91E8C] text-xs rounded-full font-semibold">{badge}</span>
                  ))}
                </div>
                <p className="text-sm text-gray-600 mb-1 font-['Poppins']">{item.ingredients}</p>
                <p className="text-xs text-gray-500 italic font-['Poppins']">{item.origin}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
