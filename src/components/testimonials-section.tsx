import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Анастасия, 19 лет",
    role: "Студентка, Москва",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Благодаря Пушкинской карте побывала на трёх спектаклях МХАТа и двух выставках в Третьяковской галерее. Раньше не позволяла себе такие траты — теперь хожу каждый месяц!",
  },
  {
    name: "Дмитрий, 17 лет",
    role: "Школьник, Санкт-Петербург",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "Посетил Эрмитаж и Русский музей, сходил на концерт классической музыки. Открыл для себя совершенно новый мир. Карта реально меняет жизнь.",
  },
  {
    name: "Мария, 21 год",
    role: "Студентка университета, Казань",
    avatar: "/professional-woman-scientist.png",
    content:
      "Оформила карту за 5 минут через Госуслуги. Уже потратила весь баланс на театр и кино. Жду, когда обновится в следующем году — это лучшая государственная инициатива!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Что говорят участники программы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Миллионы молодых людей уже открыли культуру с Пушкинской картой
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
