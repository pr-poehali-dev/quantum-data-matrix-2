import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Кто может получить Пушкинскую карту?",
      answer:
        "Пушкинская карта доступна всем гражданам Российской Федерации в возрасте от 14 до 22 лет включительно. Для оформления потребуется подтверждённая учётная запись на портале Госуслуги.",
    },
    {
      question: "Сколько денег на карте и когда они обновляются?",
      answer:
        "На карту ежегодно зачисляется 5 000 рублей от государства. Баланс обновляется 1 января каждого года. Неиспользованные средства сгорают 31 декабря — не откладывайте на потом!",
    },
    {
      question: "Как оформить карту?",
      answer:
        "Карту можно оформить через мобильное приложение «Госуслуги Культура» или на портале gosuslugi.ru. Вся процедура занимает около 5 минут — нужна только подтверждённая учётная запись на Госуслугах.",
    },
    {
      question: "Где можно использовать Пушкинскую карту?",
      answer:
        "Карта принимается в тысячах учреждений культуры по всей России: театрах, музеях, кинотеатрах, на концертных площадках и выставках. Найти ближайшие мероприятия можно в приложении «Госуслуги Культура» или на сайте culture.ru.",
    },
    {
      question: "Можно ли тратить средства карты на что-то ещё?",
      answer:
        "Нет, Пушкинская карта предназначена исключительно для покупки билетов на культурные мероприятия. Снятие наличных и оплата других товаров и услуг невозможны.",
    },
    {
      question: "Что делать, если учреждение культуры не принимает карту?",
      answer:
        "Проверьте, является ли учреждение партнёром программы. Список партнёров постоянно расширяется. Если ваш любимый театр или музей ещё не в программе, предложите им подключиться — это бесплатно для учреждений культуры.",
    },
  ]

  return (
    <section id="faq" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что нужно знать о Пушкинской карте и программе государственной поддержки культуры.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-yellow-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-yellow-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
