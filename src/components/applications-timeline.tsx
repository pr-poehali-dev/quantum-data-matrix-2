import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Шаг 1: Получите карту",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Оформите Пушкинскую карту через портал Госуслуги или мобильное приложение «Госуслуги Культура».
            Карта выдаётся бесплатно всем гражданам России в возрасте от 14 до 22 лет.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Зарегистрируйтесь на Госуслугах
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Подтвердите учётную запись
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Получите виртуальную карту мгновенно
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 2: Выберите мероприятие",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Откройте приложение «Госуслуги Культура» или сайт culture.ru и найдите интересные события рядом с вами.
            Театры, музеи, кино, концерты и выставки — тысячи вариантов по всей стране.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Театры и спектакли
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Музеи и выставки
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Кино и концерты
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Шаг 3: Купите билет",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Оплатите билет Пушкинской картой онлайн или в кассе учреждения культуры.
            Деньги списываются с баланса карты — собственные средства тратить не нужно.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Оплата онлайн или в кассе
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Баланс обновляется автоматически
            </div>
            <div className="flex items-center gap-3 text-yellow-400 text-sm">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              Неиспользованные средства сгорают 31 декабря
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Как пользоваться картой</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Три простых шага — и культура доступна бесплатно. Всё оформляется онлайн за несколько минут.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
