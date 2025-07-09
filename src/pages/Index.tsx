import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const Index = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const gameCategories = [
    {
      name: "CS:GO / CS2",
      icon: "Target",
      count: "0",
      description: "Скины, ножи, перчатки",
    },
    {
      name: "Dota 2",
      icon: "Zap",
      count: "0",
      description: "Сеты, аркана, иммортал",
    },
    {
      name: "Roblox",
      icon: "Users",
      count: "0",
      description: "Аккаунты, робуксы, предметы",
    },
    {
      name: "Valorant",
      icon: "Crosshair",
      count: "0",
      description: "Скины оружия, аккаунты",
    },
    {
      name: "Fortnite",
      icon: "Shield",
      count: "0",
      description: "Скины, В-баксы, аккаунты",
    },
    {
      name: "Minecraft",
      icon: "Box",
      count: "0",
      description: "Аккаунты, сервера, моды",
    },
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
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="LogIn" size={16} className="mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Вход в аккаунт</DialogTitle>
                    <DialogDescription>
                      Войдите в свой аккаунт, чтобы покупать и продавать игровые
                      товары
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="ваш@email.com" type="email" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Пароль</label>
                      <Input placeholder="Введите пароль" type="password" />
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Войти
                    </Button>
                    <p className="text-sm text-center text-gray-500">
                      Нет аккаунта?{" "}
                      <button
                        onClick={() => {
                          setIsLoginOpen(false);
                          setIsRegisterOpen(true);
                        }}
                        className="text-indigo-600 hover:underline"
                      >
                        Зарегистрироваться
                      </button>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>

              <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    <Icon name="UserPlus" size={16} className="mr-2" />
                    Регистрация
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Создать аккаунт</DialogTitle>
                    <DialogDescription>
                      Присоединяйтесь к GameMarket и начните торговать без
                      комиссий
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">
                        Имя пользователя
                      </label>
                      <Input placeholder="Ваш никнейм" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Email</label>
                      <Input placeholder="ваш@email.com" type="email" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Пароль</label>
                      <Input placeholder="Создайте пароль" type="password" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">
                        Подтвердите пароль
                      </label>
                      <Input placeholder="Повторите пароль" type="password" />
                    </div>
                    <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                      Создать аккаунт
                    </Button>
                    <p className="text-sm text-center text-gray-500">
                      Уже есть аккаунт?{" "}
                      <button
                        onClick={() => {
                          setIsRegisterOpen(false);
                          setIsLoginOpen(true);
                        }}
                        className="text-indigo-600 hover:underline"
                      >
                        Войти
                      </button>
                    </p>
                  </div>
                </DialogContent>
              </Dialog>
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
        {/* Game Categories */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Популярные игры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gameCategories.map((game, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-full group-hover:scale-110 transition-transform">
                      <Icon name={game.icon} className="text-white" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {game.name}
                      </h4>
                      <p className="text-sm text-gray-500 mb-2">
                        {game.description}
                      </p>
                      <p className="text-xs text-gray-400">
                        {game.count} активных предложений
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Empty State - No Items */}
        <section>
          <div className="text-center py-16">
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-12 max-w-2xl mx-auto">
              <div className="text-6xl mb-6">🎮</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Товаров пока нет
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Только зарегистрированные пользователи могут размещать товары на
                продажу. Станьте первым продавцом на нашей площадке!
              </p>

              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-500 mb-8">
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Shield" size={16} className="text-green-500" />
                    <span>Безопасные сделки</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Zap" size={16} className="text-blue-500" />
                    <span>Без комиссий</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Icon name="Users" size={16} className="text-purple-500" />
                    <span>Только от людей</span>
                  </div>
                </div>

                <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
                  <DialogTrigger asChild>
                    <Button
                      size="lg"
                      className="bg-indigo-600 hover:bg-indigo-700"
                    >
                      <Icon name="UserPlus" size={20} className="mr-2" />
                      Зарегистрироваться и продать первый товар
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
            </div>
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
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-white text-indigo-600 hover:bg-gray-50"
                >
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Создать аккаунт
                </Button>
              </DialogTrigger>
            </Dialog>
            <Dialog open={isRegisterOpen} onOpenChange={setIsRegisterOpen}>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-indigo-600"
                >
                  <Icon name="Plus" size={20} className="mr-2" />
                  Разместить товар
                </Button>
              </DialogTrigger>
            </Dialog>
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
