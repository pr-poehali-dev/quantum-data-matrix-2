import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "До 5 000 ₽ ежегодно",
    description: "Государство зачисляет средства на карту каждый год. Деньги можно тратить на билеты в театры, музеи, кино и на концерты.",
    icon: "money",
    badge: "Бесплатно",
  },
  {
    title: "Карта системы «Мир»",
    description: "Пушкинская карта работает на платформе национальной платёжной системы «Мир» и принимается во всех партнёрских учреждениях культуры.",
    icon: "card",
    badge: "Банк",
  },
  {
    title: "Тысячи мероприятий",
    description: "Более 40 000 культурных событий по всей России: спектакли, выставки, фильмы, концерты и экскурсии.",
    icon: "ticket",
    badge: "Афиша",
  },
  {
    title: "Приложение «Госуслуги Культура»",
    description: "Удобное мобильное приложение для поиска мероприятий, покупки билетов и управления картой прямо со смартфона.",
    icon: "phone",
    badge: "Приложение",
  },
  {
    title: "Для молодёжи 14–22 лет",
    description: "Программа создана специально для молодых людей от 14 до 22 лет — граждан Российской Федерации.",
    icon: "people",
    badge: "Молодёжь",
  },
  {
    title: "Совместный проект государства",
    description: "Инициатива Минкультуры, Минцифры и Почта Банка для поддержки культурного просвещения молодого поколения.",
    icon: "gov",
    badge: "Государство",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Всё о Пушкинской карте</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Государственная программа поддержки культуры для молодёжи России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "money" && "💰"}
                    {feature.icon === "card" && "💳"}
                    {feature.icon === "ticket" && "🎭"}
                    {feature.icon === "phone" && "📱"}
                    {feature.icon === "people" && "🎓"}
                    {feature.icon === "gov" && "🏛️"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
