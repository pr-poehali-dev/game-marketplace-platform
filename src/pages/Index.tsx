import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const gameItems = [
    {
      id: 1,
      name: "Legendary Sword +15",
      game: "MMORPG Online",
      price: "2,500 ₽",
      seller: "ProGamer2024",
      rating: 5,
      image: "🗡️",
      category: "Weapons",
    },
    {
      id: 2,
      name: "Rare Diamond Armor Set",
      game: "Fantasy Quest",
      price: "4,200 ₽",
      seller: "ItemMaster",
      rating: 5,
      image: "🛡️",
      category: "Armor",
    },
    {
      id: 3,
      name: "1000 Gold Coins",
      game: "Strategy Empire",
      price: "350 ₽",
      seller: "CoinDealer",
      rating: 4,
      image: "🪙",
      category: "Currency",
    },
    {
      id: 4,
      name: "Elite Gaming Account",
      game: "Battle Royale",
      price: "15,000 ₽",
      seller: "AccountPro",
      rating: 5,
      image: "👤",
      category: "Accounts",
    },
  ];

  const categories = [
    { name: "Оружие", icon: "Sword", count: "245+" },
    { name: "Броня", icon: "Shield", count: "189+" },
    { name: "Валюта", icon: "Coins", count: "567+" },
    { name: "Аккаунты", icon: "User", count: "89+" },
    { name: "Услуги", icon: "Zap", count: "156+" },
    { name: "Редкие предметы", icon: "Star", count: "78+" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                <Icon name="Gamepad2" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">GameMarket</h1>
                <p className="text-sm text-gray-500">
                  Игровая биржа без комиссий
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Icon name="LogIn" size={16} className="mr-2" />
                Войти
              </Button>
              <Button size="sm" className="bg-indigo-600 hover:bg-indigo-700">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Покупай и продавай игровые товары
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
              БЕЗ КОМИССИЙ
            </span>
          </h2>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Только зарегистрированные пользователи. Прямые сделки между
            игроками. Максимальная безопасность.
          </p>

          {/* Search */}
          <div className="max-w-2xl mx-auto bg-white rounded-2xl p-2 shadow-2xl">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <Icon
                  name="Search"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <Input
                  placeholder="Найти игровые товары, аккаунты, услуги..."
                  className="pl-12 border-0 text-gray-900 placeholder-gray-500 text-lg py-3 focus:ring-0"
                />
              </div>
              <Button
                size="lg"
                className="bg-indigo-600 hover:bg-indigo-700 px-8"
              >
                <Icon name="Search" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Categories */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Категории товаров
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full inline-block mb-4 group-hover:scale-110 transition-transform">
                    <Icon
                      name={category.icon}
                      className="text-white"
                      size={24}
                    />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {category.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {category.count} товаров
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Popular Items */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-gray-900">
              🔥 Популярные товары
            </h3>
            <Button variant="outline">
              Показать все
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gameItems.map((item) => (
              <Card
                key={item.id}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
              >
                <CardContent className="p-0">
                  {/* Item Image */}
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 text-center relative overflow-hidden">
                    <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                      {item.image}
                    </div>
                    <Badge className="absolute top-4 right-4 bg-green-500 hover:bg-green-600">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Item Info */}
                  <div className="p-6">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-500 mb-3">{item.game}</p>

                    {/* Seller Info */}
                    <div className="flex items-center mb-4">
                      <div className="bg-gray-100 p-1 rounded-full mr-2">
                        <Icon name="User" size={14} className="text-gray-600" />
                      </div>
                      <span className="text-sm text-gray-600">
                        {item.seller}
                      </span>
                      <div className="flex items-center ml-auto">
                        {[...Array(item.rating)].map((_, i) => (
                          <Icon
                            key={i}
                            name="Star"
                            size={12}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Price and Buy */}
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-indigo-600">
                        {item.price}
                      </span>
                      <Button
                        size="sm"
                        className="bg-indigo-600 hover:bg-indigo-700"
                      >
                        <Icon name="ShoppingCart" size={16} className="mr-1" />
                        Купить
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Registration CTA */}
        <section className="mt-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Готов начать торговать?</h3>
          <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            Зарегистрируйся сейчас и получи доступ к тысячам игровых товаров от
            проверенных продавцов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-50"
            >
              <Icon name="UserPlus" size={20} className="mr-2" />
              Создать аккаунт
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-indigo-600"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Разместить товар
            </Button>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-2 rounded-lg">
                  <Icon name="Gamepad2" className="text-white" size={20} />
                </div>
                <span className="font-bold text-lg">GameMarket</span>
              </div>
              <p className="text-gray-400">
                Безопасная торговля игровыми товарами без комиссий
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Как покупать</li>
                <li>Безопасность</li>
                <li>Поддержка</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Продавцам</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Как продавать</li>
                <li>Правила</li>
                <li>Комиссии</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Техподдержка</li>
                <li>Telegram</li>
                <li>О проекте</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GameMarket. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
