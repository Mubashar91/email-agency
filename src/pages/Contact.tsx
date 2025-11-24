import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/I18nProvider";
import { useMemo, useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { t } = useI18n();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    service: "",
    website: "",
    budget: "",
    timeline: "",
    preferred: "email",
    newsletter: false,
    message: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const MAX_MESSAGE = 1000;
  const messageCount = useMemo(() => form.message.length, [form.message]);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = t("contact.error.name");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)) e.email = t("contact.error.email");
    if (!form.message.trim() || form.message.trim().length < 10) e.message = t("contact.error.message");
    if (!form.consent) e.consent = t("contact.error.consent");
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      setLoading(true);
      await new Promise((r) => setTimeout(r, 800));
      toast({ title: t("contact.success.title"), description: t("contact.success.desc") });
      setForm({ name: "", email: "", phone: "", company: "", subject: "", service: "", website: "", budget: "", timeline: "", preferred: "email", newsletter: false, message: "", consent: false });
      setErrors({});
    } catch {
      toast({ title: t("contact.error.title"), description: t("contact.error.desc") });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <section id="contact" className="pt-28 pb-16">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3">{t("contact.title")}</h1>
          <p className="text-muted-foreground mb-8">{t("contact.subtitle")}</p>

          <form className="grid grid-cols-1 gap-4 sm:gap-5" onSubmit={onSubmit} noValidate>
            <input type="text" name="website2" value={form.website ? "x" : ""} onChange={() => {}} className="hidden" aria-hidden="true" tabIndex={-1} />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="mb-1 block text-sm font-medium">{t("contact.name")} <span className="text-destructive">*</span></label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(ev) => setForm({ ...form, name: ev.target.value })}
                  placeholder={t("contact.name")}
                  required
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={`w-full rounded-md border ${errors.name ? "border-destructive" : "border-border"} bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.name && <p id="name-error" className="mt-1 text-xs text-destructive">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className="mb-1 block text-sm font-medium">{t("contact.email")} <span className="text-destructive">*</span></label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(ev) => setForm({ ...form, email: ev.target.value })}
                  placeholder={t("contact.email")}
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={`w-full rounded-md border ${errors.email ? "border-destructive" : "border-border"} bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
                />
                {errors.email && <p id="email-error" className="mt-1 text-xs text-destructive">{errors.email}</p>}
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium">{t("contact.phone")}</label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={(ev) => setForm({ ...form, phone: ev.target.value })}
                placeholder={t("contact.phone")}
                pattern="^[0-9+()\-\s]{6,}$"
                title="Use digits and + ( ) -"
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              </div>
              <div>
              <label htmlFor="company" className="mb-1 block text-sm font-medium">{t("contact.company")}</label>
              <input
                id="company"
                type="text"
                value={form.company}
                onChange={(ev) => setForm({ ...form, company: ev.target.value })}
                placeholder={t("contact.company")}
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
              <label htmlFor="subject" className="mb-1 block text-sm font-medium">{t("contact.subject")}</label>
              <input
                id="subject"
                type="text"
                value={form.subject}
                onChange={(ev) => setForm({ ...form, subject: ev.target.value })}
                placeholder={t("contact.subject")}
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              </div>
              <div>
              <label htmlFor="service" className="mb-1 block text-sm font-medium">{t("contact.service.placeholder")}</label>
              <select
                id="service"
                value={form.service}
                onChange={(ev) => setForm({ ...form, service: ev.target.value })}
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{t("contact.service.placeholder")}</option>
                <option value="inbox">{t("contact.service.inbox")}</option>
                <option value="automation">{t("contact.service.automation")}</option>
                <option value="vip">{t("contact.service.vip")}</option>
              </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
              <label htmlFor="website" className="mb-1 block text-sm font-medium">{t("contact.website")}</label>
              <input
                id="website"
                type="url"
                value={form.website}
                onChange={(ev) => setForm({ ...form, website: ev.target.value })}
                placeholder={t("contact.website")}
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              </div>
              <div>
              <label htmlFor="budget" className="mb-1 block text-sm font-medium">{t("contact.budget.placeholder")}</label>
              <select
                id="budget"
                value={form.budget}
                onChange={(ev) => setForm({ ...form, budget: ev.target.value })}
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{t("contact.budget.placeholder")}</option>
                <option value="lt1k">{t("contact.budget.lt1k")}</option>
                <option value="1to3k">{t("contact.budget.1to3k")}</option>
                <option value="3to10k">{t("contact.budget.3to10k")}</option>
                <option value="gt10k">{t("contact.budget.gt10k")}</option>
              </select>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
              <label htmlFor="timeline" className="mb-1 block text-sm font-medium">{t("contact.timeline.placeholder")}</label>
              <select
                id="timeline"
                value={form.timeline}
                onChange={(ev) => setForm({ ...form, timeline: ev.target.value })}
                className="w-full rounded-md border border-border bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">{t("contact.timeline.placeholder")}</option>
                <option value="asap">{t("contact.timeline.asap")}</option>
                <option value="2to4w">{t("contact.timeline.2to4w")}</option>
                <option value="1to3m">{t("contact.timeline.1to3m")}</option>
              </select>
              </div>
              <div className="flex items-center gap-4 rounded-md border border-border px-4 py-3">
                <span className="text-sm">{t("contact.preferred")}</span>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="preferred" value="email" checked={form.preferred === "email"} onChange={(ev) => setForm({ ...form, preferred: ev.target.value })} />
                  <span>{t("contact.preferred.email")}</span>
                </label>
                <label className="flex items-center gap-2 text-sm">
                  <input type="radio" name="preferred" value="phone" checked={form.preferred === "phone"} onChange={(ev) => setForm({ ...form, preferred: ev.target.value })} />
                  <span>{t("contact.preferred.phone")}</span>
                </label>
              </div>
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium">{t("contact.message")} <span className="text-destructive">*</span></label>
              <textarea
                id="message"
                rows={6}
                value={form.message}
                onChange={(ev) => setForm({ ...form, message: ev.target.value })}
                placeholder={t("contact.message")}
                maxLength={MAX_MESSAGE}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : "message-help"}
                className={`w-full rounded-md border ${errors.message ? "border-destructive" : "border-border"} bg-background px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary`}
              />
              <div className="mt-1 flex items-center justify-between text-xs">
                {errors.message ? (
                  <p id="message-error" className="text-destructive">{errors.message}</p>
                ) : (
                  <p id="message-help" className="text-muted-foreground">{t("contact.message.helper")}</p>
                )}
                <span className="text-muted-foreground">{messageCount}/{MAX_MESSAGE}</span>
              </div>
            </div>
            <label className="flex items-start gap-3 text-sm">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(ev) => setForm({ ...form, consent: ev.target.checked })}
                className="mt-1 h-4 w-4"
              />
              <span className={`${errors.consent ? "text-destructive" : "text-foreground"}`}>
                {t("contact.consent")}
              </span>
            </label>
            {errors.consent && <p className="-mt-3 text-xs text-destructive">{errors.consent}</p>}
            <label className="flex items-center gap-3 text-sm">
              <input
                type="checkbox"
                checked={form.newsletter}
                onChange={(ev) => setForm({ ...form, newsletter: ev.target.checked })}
                className="h-4 w-4"
              />
              <span>{t("contact.newsletter")}</span>
            </label>
            <div className="flex gap-3 justify-end pt-2">
              <Button variant="secondary" type="button" onClick={() => { setForm({ name: "", email: "", phone: "", company: "", subject: "", service: "", website: "", budget: "", timeline: "", preferred: "email", newsletter: false, message: "", consent: false }); setErrors({}); }} disabled={loading}>{t("contact.cancel")}</Button>
              <Button variant="gold" type="submit" disabled={loading} className={loading ? "opacity-70" : ""}>{loading ? t("contact.submitting") : t("contact.submit")}</Button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;
