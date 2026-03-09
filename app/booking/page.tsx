"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  Mail,
  Phone,
  User2,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    id: "consultation",
    name: "Úvodní konzultace",
    duration: 30,
    price: 790,
    description: "Rychlý onboarding call pro nové klienty.",
  },
  {
    id: "strategy",
    name: "Strategie & audit",
    duration: 60,
    price: 1490,
    description: "Detailní rozbor webu, brandu a dalšího postupu.",
  },
  {
    id: "vip",
    name: "VIP workshop",
    duration: 90,
    price: 2490,
    description: "Intenzivní sezení s konkrétním akčním plánem.",
  },
];

const staff = [
  { id: "mk", name: "Miroslav Kučera", role: "MK Digital" },
  { id: "team", name: "MK Studio", role: "Tým rezervací" },
];

const dates = [
  { id: "mon", day: "Po", date: "9", month: "bře" },
  { id: "tue", day: "Út", date: "10", month: "bře" },
  { id: "wed", day: "St", date: "11", month: "bře" },
  { id: "thu", day: "Čt", date: "12", month: "bře" },
  { id: "fri", day: "Pá", date: "13", month: "bře" },
  { id: "sat", day: "So", date: "14", month: "bře" },
];

const timeMap: Record<string, string[]> = {
  mon: ["09:00", "10:00", "11:30", "14:00", "16:00"],
  tue: ["08:30", "10:30", "13:00", "15:00", "17:30"],
  wed: ["09:00", "09:30", "12:00", "13:30", "16:30"],
  thu: ["10:00", "11:00", "14:30", "15:30", "18:00"],
  fri: ["08:00", "09:00", "11:00", "13:00", "15:00"],
  sat: ["09:00", "10:00", "12:30"],
};

const steps = ["Služba", "Specialista", "Termín", "Údaje"];

export default function BookingPage() {
  const [selectedService, setSelectedService] = useState(services[1]);
  const [selectedStaff, setSelectedStaff] = useState(staff[0]);
  const [selectedDate, setSelectedDate] = useState(dates[3]);
  const [selectedTime, setSelectedTime] = useState("14:30");
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const availableTimes = useMemo(() => {
    return timeMap[selectedDate.id] ?? [];
  }, [selectedDate]);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#fffdf9_0%,#f8f5ef_100%)] text-slate-900">
      <section className="relative overflow-hidden border-b border-orange-100 bg-[radial-gradient(circle_at_top_left,rgba(251,146,60,0.10),transparent_28%),radial-gradient(circle_at_top_right,rgba(245,158,11,0.08),transparent_26%),linear-gradient(180deg,#fffaf5_0%,#f8f5ef_100%)]">
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-orange-200/40 blur-3xl" />
          <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-amber-100/60 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-medium text-orange-700 shadow-sm">
                  MK Digital • Online rezervace
                </span>
                <span className="rounded-full border border-slate-200 bg-white/80 px-4 py-1 text-sm text-slate-600 shadow-sm backdrop-blur">
                  Moderní booking flow
                </span>
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-900 md:text-6xl">
                Rezervuj si konzultaci jednoduše a profesionálně
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                Vyber službu, termín a během pár sekund máš rezervováno.
                Přehledný booking systém, který působí důvěryhodně, moderně a čistě.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                {steps.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-xs font-semibold text-white shadow-sm">
                        {index + 1}
                      </span>
                      <span className="text-sm font-medium text-slate-700">{step}</span>
                    </div>
                    {index < steps.length - 1 ? (
                      <div className="hidden h-px w-5 bg-slate-300 sm:block" />
                    ) : null}
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/70 p-5 shadow-sm">
                  <CalendarDays className="mb-3 h-5 w-5 text-orange-500" />
                  <p className="font-semibold text-slate-900">Dostupné termíny</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Přehledný výběr slotů a jednoduchý kalendářový flow.
                  </p>
                </div>

                <div className="rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50/70 p-5 shadow-sm">
                  <Mail className="mb-3 h-5 w-5 text-orange-500" />
                  <p className="font-semibold text-slate-900">Potvrzení rezervace</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Připravené pro budoucí emailové potvrzení a reminder.
                  </p>
                </div>

                <div className="rounded-2xl border border-orange-100 bg-gradient-to-br from-white to-orange-50/60 p-5 shadow-sm">
                  <Clock3 className="mb-3 h-5 w-5 text-orange-500" />
                  <p className="font-semibold text-slate-900">Rychlé objednání</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Minimum rušení, jasný proces a lepší důvěra uživatele.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-orange-100 bg-[linear-gradient(180deg,#ffffff_0%,#fff8f1_100%)] p-7 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-orange-600">
                Online rezervace
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900">
                Vyber si termín, který ti vyhovuje
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-600">
                Rezervace trvá méně než minutu. Po výběru služby a termínu jen
                doplníš své údaje a máš hotovo.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-orange-100 bg-white/80 p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Proces</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    4 jednoduché kroky
                  </p>
                </div>
                <div className="rounded-2xl border border-amber-100 bg-white/80 p-4 shadow-sm">
                  <p className="text-sm text-slate-500">Výhoda</p>
                  <p className="mt-1 text-lg font-semibold text-slate-900">
                    Přehledný a důvěryhodný flow
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <h2 className="text-2xl font-semibold text-slate-900">
                Krok 1 · Vyber službu
              </h2>
              <p className="mt-2 text-slate-600">
                Každá služba má duration, cenu a vlastní booking flow.
              </p>

              <div className="mt-6 grid gap-4 lg:grid-cols-3">
                {services.map((service) => {
                  const active = selectedService.id === service.id;

                  return (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => setSelectedService(service)}
                      className={`rounded-[24px] border p-5 text-left transition duration-200 ${
                        active
                          ? "border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50 shadow-[0_10px_30px_rgba(249,115,22,0.10)]"
                          : "border-slate-200 bg-slate-50/80 hover:border-orange-200 hover:bg-white hover:shadow-sm"
                      }`}
                    >
                      <h3 className="text-lg font-semibold text-slate-900">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">
                        {service.description}
                      </p>
                      <div className="mt-4 flex items-center justify-between text-sm text-slate-700">
                        <span>{service.duration} min</span>
                        <span className="font-semibold">{service.price} Kč</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </section>

            <div className="grid gap-6 lg:grid-cols-2">
              <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Krok 2 · Specialista
                </h2>
                <p className="mt-2 text-slate-600">
                  Single provider i týmové rezervace.
                </p>

                <div className="mt-6 space-y-3">
                  {staff.map((person) => {
                    const active = selectedStaff.id === person.id;

                    return (
                      <button
                        key={person.id}
                        type="button"
                        onClick={() => setSelectedStaff(person)}
                        className={`flex w-full items-center justify-between rounded-2xl border p-4 text-left transition duration-200 ${
                          active
                            ? "border-orange-300 bg-gradient-to-r from-orange-50 to-amber-50 shadow-sm"
                            : "border-slate-200 bg-slate-50/80 hover:border-orange-200 hover:bg-white"
                        }`}
                      >
                        <div>
                          <p className="font-semibold text-slate-900">{person.name}</p>
                          <p className="text-sm text-slate-600">{person.role}</p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>

              <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Krok 3 · Datum a čas
                </h2>
                <p className="mt-2 text-slate-600">
                  Výběr termínů jako v profi booking UI.
                </p>

                <div className="mt-6 grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {dates.map((d) => {
                    const active = selectedDate.id === d.id;

                    return (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => {
                          setSelectedDate(d);
                          setSelectedTime(timeMap[d.id]?.[0] ?? "");
                        }}
                        className={`rounded-2xl border p-3 transition duration-200 ${
                          active
                            ? "border-orange-300 bg-gradient-to-b from-orange-50 to-amber-50 shadow-sm"
                            : "border-slate-200 bg-slate-50/80 hover:border-orange-200 hover:bg-white"
                        }`}
                      >
                        <p className="text-xs text-slate-500">{d.day}</p>
                        <p className="mt-1 text-2xl font-semibold text-slate-900">
                          {d.date}
                        </p>
                        <p className="text-xs text-slate-500">{d.month}</p>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6">
                  <p className="mb-3 text-sm font-medium text-slate-700">
                    Dostupné časy
                  </p>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {availableTimes.map((time) => {
                      const active = selectedTime === time;

                      return (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`rounded-2xl border px-4 py-3 text-sm font-medium transition duration-200 ${
                            active
                              ? "border-orange-500 bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-[0_10px_20px_rgba(249,115,22,0.22)]"
                              : "border-slate-200 bg-slate-50/80 text-slate-800 hover:border-orange-200 hover:bg-white"
                          }`}
                        >
                          {time}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </section>
            </div>

            <section className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_8px_30px_rgba(15,23,42,0.05)]">
              <h2 className="text-2xl font-semibold text-slate-900">
                Krok 4 · Údaje klienta
              </h2>
              <p className="mt-2 text-slate-600">
                Minimal friction formulář pro rezervaci.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Jméno a příjmení
                    </label>
                    <div className="relative">
                      <User2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Miroslav Kučera"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="mira@mkdigital.cz"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Telefon
                    </label>
                    <div className="relative">
                      <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                      <input
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+420 777 123 456"
                        className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/80 pl-10 pr-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">
                      Typ zakázky
                    </label>
                    <input
                      placeholder="Např. web, e-shop, konzultace"
                      className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div className="space-y-2 md:col-span-2">
                    <label className="text-sm font-medium text-slate-700">
                      Poznámka k rezervaci
                    </label>
                    <textarea
                      rows={5}
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="Co chceš řešit, jaký je cíl a co už máš připravené?"
                      className="w-full rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-orange-400 focus:bg-white focus:ring-4 focus:ring-orange-100"
                    />
                  </div>

                  <div className="md:col-span-2 flex flex-col gap-4 rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50/70 to-amber-50/70 p-4 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-slate-600">
                      Po potvrzení může následovat email, CRM zápis nebo napojení na kalendář.
                    </p>
                    <button
                      type="submit"
                      className="h-12 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 px-6 font-medium text-white shadow-[0_10px_20px_rgba(249,115,22,0.20)] transition hover:from-orange-600 hover:to-amber-600"
                    >
                      Potvrdit rezervaci
                    </button>
                  </div>
                </form>
              ) : (
                <div className="mt-6 rounded-[24px] border border-emerald-200 bg-gradient-to-r from-emerald-50 to-green-50 p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-6 w-6 text-emerald-600" />
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        Rezervace potvrzena
                      </h3>
                      <p className="mt-2 text-slate-600">
                        Děkujeme. Další krok může být napojení backendu, ukládání slotů a emailové potvrzení.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </section>
          </div>

          <aside className="space-y-6">
            <div className="sticky top-6 rounded-[28px] border border-orange-100 bg-[linear-gradient(180deg,#ffffff_0%,#fffaf4_100%)] p-6 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <h2 className="text-2xl font-semibold text-slate-900">
                Souhrn rezervace
              </h2>
              <p className="mt-2 text-slate-600">
                Jasný přehled vybraného termínu a služby.
              </p>

              <div className="mt-6 rounded-2xl border border-orange-100 bg-white/80 p-4 shadow-sm">
                <p className="text-sm text-slate-500">Služba</p>
                <p className="mt-1 text-lg font-semibold text-slate-900">
                  {selectedService.name}
                </p>
                <p className="mt-1 text-sm text-slate-600">
                  {selectedService.duration} min • {selectedService.price} Kč
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">Termín</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {selectedDate.day} {selectedDate.date}. {selectedDate.month}
                  </p>
                  <p className="text-sm text-slate-600">{selectedTime}</p>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-sm text-slate-500">Poskytovatel</p>
                  <p className="mt-1 font-semibold text-slate-900">
                    {selectedStaff.name}
                  </p>
                  <p className="text-sm text-slate-600">{selectedStaff.role}</p>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-6">
                <div className="flex items-center justify-between text-sm text-slate-600">
                  <span>Cena služby</span>
                  <span>{selectedService.price} Kč</span>
                </div>
                <div className="mt-2 flex items-center justify-between text-base font-semibold text-slate-900">
                  <span>Celkem</span>
                  <span>{selectedService.price} Kč</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}