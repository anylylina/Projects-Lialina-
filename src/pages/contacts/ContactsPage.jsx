import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactsPage = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-12 space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">
          Contact Support
        </h2>
        <p className="text-yellow-400 text-lg mb-6">
          Contact us if you have any questions, suggestions or feedback!
        </p>

        <form className="space-y-4 max-w-xl">
          <Input type="email" placeholder="Your email" required />
          <Textarea placeholder="Your message" rows="4" required />
          <Button type="submit" label="Send Message" />
        </form>
      </div>

      <div className="text-yellow-500 space-y-2">
        <p>
          <strong>📧 Email:</strong> anylylina2018@gmail.com
        </p>
        <p>
          📱 <strong>Telegram:</strong> @@annalialina25
        </p>
        <p>
          <strong>📸 Instagram:</strong>@any.lialina
        </p>
      </div>
    </section>
  );
};

export default ContactsPage;
