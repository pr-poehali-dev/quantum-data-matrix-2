import { Mail, Globe, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-4">
              Пушкинская<span className="text-yellow-400">Карта</span>
            </h2>
            <p className="font-space-mono text-gray-300 mb-2 max-w-md">
              Государственная программа поддержки культуры для молодёжи России от 14 до 22 лет.
            </p>
            <p className="font-space-mono text-gray-500 text-sm mb-6">
              Совместный проект Минкультуры, Минцифры и Почта Банка.
            </p>
            <div className="flex space-x-4">
              <a href="https://culture.ru" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Globe size={20} />
              </a>
              <a href="mailto:info@culture.ru" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Mail size={20} />
              </a>
              <a href="tel:88001009000" className="text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                <Phone size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Программа</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="font-space-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Возможности
                </a>
              </li>
              <li>
                <a href="#applications" className="font-space-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Как использовать
                </a>
              </li>
              <li>
                <a href="#faq" className="font-space-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Вопросы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-orbitron text-white font-semibold mb-4">Ресурсы</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://gosuslugi.ru" target="_blank" rel="noreferrer" className="font-space-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Госуслуги
                </a>
              </li>
              <li>
                <a href="https://culture.ru" target="_blank" rel="noreferrer" className="font-space-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Culture.ru
                </a>
              </li>
              <li>
                <a href="https://mkrf.ru" target="_blank" rel="noreferrer" className="font-space-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Минкультуры России
                </a>
              </li>
              <li>
                <a href="#" className="font-space-mono text-gray-400 hover:text-yellow-400 transition-colors duration-200">
                  Партнёрам
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-yellow-500/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-space-mono text-gray-400 text-sm">© 2026 Пушкинская карта. Официальная программа Правительства РФ.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="font-space-mono text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Конфиденциальность
              </a>
              <a href="#" className="font-space-mono text-gray-400 hover:text-yellow-400 text-sm transition-colors duration-200">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
