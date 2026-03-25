import { useState } from "react";
import {
  UserPlus,
  Shield,
  Zap,
  Video,
  Phone,
  Github,
  ArrowRight,
  Hash,
  Users,
  Mic,
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Monitor,
  MessageCircle,
  LogIn,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#36393f] text-white overflow-x-hidden">
      {/* Навигация */}
      <nav className="bg-[#2f3136] border-b border-[#202225] px-4 sm:px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center">
              <Icon name="MessageCircle" size={20} />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-bold text-white">ConnectHub</h1>
              <p className="text-xs text-[#b9bbbe] hidden sm:block">Звонки, чаты и встречи в одном месте</p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b]">
              <LogIn className="w-4 h-4 mr-2" />
              Войти
            </Button>
            <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
              Регистрация
            </Button>
          </div>
          <Button
            variant="ghost"
            className="sm:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-4 pt-4 border-t border-[#202225]">
            <div className="flex flex-col gap-3">
              <Button variant="ghost" className="text-[#b9bbbe] hover:text-white hover:bg-[#40444b] justify-start">
                <LogIn className="w-4 h-4 mr-2" />
                Войти
              </Button>
              <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 py-2 rounded text-sm font-medium">
                Регистрация
              </Button>
            </div>
          </div>
        )}
      </nav>

      {/* Макет в стиле Discord */}
      <div className="flex min-h-screen">
        {/* Боковая панель серверов */}
        <div className="hidden lg:flex w-[72px] bg-[#202225] flex-col items-center py-3 gap-2">
          <div className="w-12 h-12 bg-[#5865f2] rounded-2xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer">
            <Icon name="MessageCircle" size={24} />
          </div>
          <div className="w-8 h-[2px] bg-[#36393f] rounded-full"></div>
          {[
            { icon: "Phone", label: "Звонки" },
            { icon: "Video", label: "Видео" },
            { icon: "Users", label: "Друзья" },
            { icon: "Monitor", label: "Экран" },
          ].map((item, i) => (
            <div
              key={i}
              className="w-12 h-12 bg-[#36393f] rounded-3xl hover:rounded-xl transition-all duration-200 flex items-center justify-center cursor-pointer hover:bg-[#5865f2] group"
              title={item.label}
            >
              <Icon name={item.icon} size={20} className="text-[#dcddde]" />
            </div>
          ))}
        </div>

        {/* Основной контент */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Боковая панель каналов */}
          <div
            className={`${mobileSidebarOpen ? "block" : "hidden"} lg:block w-full lg:w-60 bg-[#2f3136] flex flex-col`}
          >
            <div className="p-4 border-b border-[#202225] flex items-center justify-between">
              <h2 className="text-white font-semibold text-base">ConnectHub</h2>
              <Button
                variant="ghost"
                className="lg:hidden text-[#b9bbbe] hover:text-white hover:bg-[#40444b] p-1"
                onClick={() => setMobileSidebarOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex-1 p-2">
              <div className="mb-4">
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Чаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["общий", "новости", "знакомства", "поддержка"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Hash className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 px-2 py-1 text-[#8e9297] text-xs font-semibold uppercase tracking-wide">
                  <ArrowRight className="w-3 h-3" />
                  <span>Голосовые комнаты</span>
                </div>
                <div className="mt-1 space-y-0.5">
                  {["Общий зал", "Переговорная"].map((channel) => (
                    <div
                      key={channel}
                      className="flex items-center gap-1.5 px-2 py-1 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] cursor-pointer"
                    >
                      <Mic className="w-4 h-4" />
                      <span className="text-sm">{channel}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Область пользователя */}
            <div className="p-2 bg-[#292b2f] flex items-center gap-2">
              <div className="w-8 h-8 bg-[#5865f2] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-medium">А</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-white text-sm font-medium truncate">Алекс</div>
                <div className="text-[#b9bbbe] text-xs truncate">В сети</div>
              </div>
              <div className="flex gap-1">
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Mic className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
                <Button variant="ghost" size="sm" className="w-8 h-8 p-0 hover:bg-[#40444b]">
                  <Settings className="w-4 h-4 text-[#b9bbbe]" />
                </Button>
              </div>
            </div>
          </div>

          {/* Область чата */}
          <div className="flex-1 flex flex-col">
            {/* Заголовок чата */}
            <div className="h-12 bg-[#36393f] border-b border-[#202225] flex items-center px-4 gap-2">
              <Button
                variant="ghost"
                className="lg:hidden text-[#8e9297] hover:text-[#dcddde] hover:bg-[#40444b] p-1 mr-2"
                onClick={() => setMobileSidebarOpen(true)}
              >
                <Menu className="w-5 h-5" />
              </Button>
              <Hash className="w-5 h-5 text-[#8e9297]" />
              <span className="text-white font-semibold">общий</span>
              <div className="w-px h-6 bg-[#40444b] mx-2 hidden sm:block"></div>
              <span className="text-[#8e9297] text-sm hidden sm:block">Добро пожаловать в ConnectHub — общайтесь, звоните, делитесь экраном</span>
              <div className="ml-auto flex items-center gap-2 sm:gap-4">
                <Bell className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
                <Search className="w-4 h-4 sm:w-5 sm:h-5 text-[#b9bbbe] cursor-pointer hover:text-[#dcddde]" />
              </div>
            </div>

            {/* Сообщения чата */}
            <div className="flex-1 p-2 sm:p-4 space-y-4 sm:space-y-6 overflow-y-auto">

              {/* Приветственное сообщение бота */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#5865f2] rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">ConnectHub</span>
                    <span className="bg-[#5865f2] text-white text-xs px-1 rounded">БОТ</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:00</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base">
                    <p className="mb-3 sm:mb-4">
                      <strong>Добро пожаловать в ConnectHub!</strong> Общайся, звони и встречайся с друзьями в одном месте.
                    </p>
                    <div className="bg-[#2f3136] border-l-4 border-[#5865f2] p-3 sm:p-4 rounded">
                      <h3 className="text-white font-semibold mb-2 text-sm sm:text-base">Что умеет ConnectHub:</h3>
                      <ul className="space-y-1 text-xs sm:text-sm text-[#b9bbbe]">
                        <li>🎙️ Голосовые и видео звонки в HD качестве</li>
                        <li>🖥️ Демонстрация экрана коллегам и друзьям</li>
                        <li>💬 Личные чаты и групповые беседы</li>
                        <li>👥 Добавление друзей и управление контактами</li>
                        <li>🔐 Безопасная регистрация и авторизация</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Демо звонка */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">М</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Мария</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:05</span>
                  </div>
                  <div className="text-[#dcddde] mb-3 text-sm sm:text-base">
                    Только что созвонились с командой — демонстрация экрана работает отлично! 🚀
                  </div>

                  {/* Карточка активного звонка */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg overflow-hidden w-full max-w-sm">
                    <div className="h-16 sm:h-20 bg-gradient-to-r from-[#3ba55c] to-[#2d7d46] relative flex items-center justify-center">
                      <div className="text-white font-semibold text-sm sm:text-base">Видеозвонок • 12:34</div>
                    </div>

                    <div className="pt-4 sm:pt-5 px-3 sm:px-4 pb-3 sm:pb-4">
                      <div className="mb-3 sm:mb-4">
                        <h3 className="text-white text-base sm:text-lg font-bold mb-1">Групповой звонок</h3>
                        <div className="flex items-center gap-2 text-[#b9bbbe] text-xs sm:text-sm">
                          <div className="w-2 h-2 bg-[#3ba55c] rounded-full animate-pulse"></div>
                          <span>3 участника онлайн</span>
                        </div>
                      </div>

                      <div className="flex border-b border-[#40444b] mb-3 sm:mb-4">
                        <button className="px-3 sm:px-4 py-2 text-[#8e9297] text-xs sm:text-sm font-medium hover:text-[#dcddde]">
                          Участники
                        </button>
                        <button className="px-3 sm:px-4 py-2 text-white text-xs sm:text-sm font-medium border-b-2 border-[#5865f2]">
                          Активность
                        </button>
                      </div>

                      {/* Участники звонка */}
                      <div className="space-y-2">
                        {[
                          { name: "Мария", icon: "Video", color: "from-purple-500 to-pink-500", status: "Демонстрирует экран" },
                          { name: "Иван", icon: "Mic", color: "from-green-500 to-blue-500", status: "Говорит..." },
                          { name: "Алекс", icon: "Phone", color: "from-blue-500 to-purple-500", status: "Слушает" },
                        ].map((user, i) => (
                          <div key={i} className="flex items-center gap-2 sm:gap-3 p-2 bg-[#36393f] rounded-lg">
                            <div className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                              <span className="text-white text-xs font-medium">{user.name[0]}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="text-white font-medium text-xs sm:text-sm">{user.name}</div>
                              <div className="text-[#b9bbbe] text-xs">{user.status}</div>
                            </div>
                            <div className="text-[#3ba55c]">
                              <Icon name={user.icon} size={16} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Сообщение о приглашении в друзья */}
              <div className="flex gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-xs sm:text-sm font-medium">И</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-white font-medium text-sm sm:text-base">Иван</span>
                    <span className="text-[#72767d] text-xs hidden sm:inline">Сегодня в 12:08</span>
                  </div>
                  <div className="text-[#dcddde] text-sm sm:text-base mb-3">
                    Отправил тебе заявку в друзья! Принимай скорее, хочу показать экран 😄
                  </div>
                  {/* Карточка заявки в друзья */}
                  <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-3 sm:p-4 max-w-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-medium">И</span>
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">Иван</div>
                        <div className="text-[#b9bbbe] text-xs">ivan_pro · хочет дружить</div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="bg-[#3ba55c] hover:bg-[#2d7d46] text-white text-xs px-3 py-1 rounded flex-1">
                        <Icon name="UserCheck" size={12} className="mr-1" />
                        Принять
                      </Button>
                      <Button size="sm" variant="ghost" className="text-[#b9bbbe] hover:bg-[#40444b] text-xs px-3 py-1 rounded flex-1 border border-[#4f545c]">
                        Отклонить
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Секция "Начало работы" */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6 mt-6 sm:mt-8">
                <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 flex items-center gap-2">
                  <Icon name="Rocket" size={24} className="text-[#5865f2]" />
                  Начни общение прямо сейчас
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">1</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Зарегистрируйся</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Создай аккаунт за 30 секунд — email и пароль</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">2</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Найди друзей</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Пригласи по имени пользователя или ссылке</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865f2] rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-sm sm:text-base">3</span>
                    </div>
                    <h3 className="text-white font-medium mb-2 text-sm sm:text-base">Звони и общайся</h3>
                    <p className="text-[#b9bbbe] text-xs sm:text-sm">Голос, видео, чат и демонстрация экрана</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button className="bg-[#5865f2] hover:bg-[#4752c4] text-white px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Создать аккаунт
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#4f545c] text-[#b9bbbe] hover:bg-[#40444b] hover:border-[#6d6f78] px-6 sm:px-8 py-2 sm:py-3 rounded text-sm font-medium bg-transparent"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Войти в аккаунт
                  </Button>
                </div>
              </div>

              {/* Возможности */}
              <div className="bg-[#2f3136] border border-[#202225] rounded-lg p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4">Почему ConnectHub?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {[
                    {
                      icon: "Video",
                      title: "Видеозвонки в HD",
                      desc: "Кристально чёткое видео и звук без задержек",
                    },
                    {
                      icon: "Monitor",
                      title: "Демонстрация экрана",
                      desc: "Показывай экран одним нажатием кнопки",
                    },
                    {
                      icon: "UserPlus",
                      title: "Приглашения в друзья",
                      desc: "Легко находи и добавляй контакты",
                    },
                    {
                      icon: "Shield",
                      title: "Безопасность",
                      desc: "Шифрование и защита личных данных",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 p-2 sm:p-3 rounded hover:bg-[#36393f] transition-colors"
                    >
                      <div className="text-[#5865f2] mt-0.5">
                        <Icon name={feature.icon} size={18} />
                      </div>
                      <div>
                        <div className="text-white font-medium text-xs sm:text-sm">{feature.title}</div>
                        <div className="text-[#b9bbbe] text-xs sm:text-sm">{feature.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Поле ввода сообщения */}
            <div className="p-2 sm:p-4">
              <div className="bg-[#40444b] rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2">
                <span className="text-[#72767d] text-xs sm:text-sm flex-1">Сообщение #общий</span>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-[#5865f2] hover:bg-[#4752c4] text-white text-xs px-3 py-1 rounded hidden sm:flex items-center gap-1">
                    <Icon name="Phone" size={12} />
                    Позвонить
                  </Button>
                  <Button size="sm" className="bg-[#3ba55c] hover:bg-[#2d7d46] text-white text-xs px-3 py-1 rounded hidden sm:flex items-center gap-1">
                    <Icon name="Video" size={12} />
                    Видео
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Боковая панель участников */}
          <div className="hidden xl:block w-60 bg-[#2f3136] p-4">
            <div className="mb-4">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">В сети — 4</h3>
              <div className="space-y-2">
                {[
                  {
                    name: "Мария",
                    status: "В видеозвонке",
                    avatar: "М",
                    color: "from-purple-500 to-pink-500",
                    statusIcon: "Video",
                  },
                  { name: "Иван", status: "Демонстрирует экран", avatar: "И", color: "from-green-500 to-blue-500", statusIcon: "Monitor" },
                  { name: "Алекс", status: "В голосовом чате", avatar: "А", color: "from-blue-500 to-purple-500", statusIcon: "Mic" },
                  { name: "Олеся", status: "В сети", avatar: "О", color: "from-yellow-500 to-orange-500", statusIcon: "Circle" },
                ].map((user, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-[#36393f] cursor-pointer">
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${user.color} rounded-full flex items-center justify-center relative`}
                    >
                      <span className="text-white text-sm font-medium">{user.avatar}</span>
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-[#3ba55c] border-2 border-[#2f3136] rounded-full"></div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{user.name}</div>
                      <div className="text-[#b9bbbe] text-xs truncate flex items-center gap-1">
                        <Icon name={user.statusIcon} size={10} />
                        {user.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Блок быстрых действий */}
            <div className="mt-4 pt-4 border-t border-[#40444b]">
              <h3 className="text-[#8e9297] text-xs font-semibold uppercase tracking-wide mb-2">Быстрые действия</h3>
              <div className="space-y-1">
                <button className="w-full flex items-center gap-2 px-2 py-2 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] text-sm transition-colors">
                  <Icon name="Phone" size={14} className="text-[#3ba55c]" />
                  <span>Начать звонок</span>
                </button>
                <button className="w-full flex items-center gap-2 px-2 py-2 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] text-sm transition-colors">
                  <Icon name="Video" size={14} className="text-[#5865f2]" />
                  <span>Видеоконференция</span>
                </button>
                <button className="w-full flex items-center gap-2 px-2 py-2 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] text-sm transition-colors">
                  <Icon name="UserPlus" size={14} className="text-[#faa61a]" />
                  <span>Добавить друга</span>
                </button>
                <button className="w-full flex items-center gap-2 px-2 py-2 rounded text-[#8e9297] hover:text-[#dcddde] hover:bg-[#393c43] text-sm transition-colors">
                  <Icon name="Monitor" size={14} className="text-[#eb459e]" />
                  <span>Показать экран</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;