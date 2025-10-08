import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../utils/motionVariants";

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

interface ContactField {
  name: keyof ContactForm;
  label: string;
  type: string;
  placeholder: string;
  component: "input" | "textarea";
  rows?: number;
}

const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({
    type: null,
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactFields: ContactField[] = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      component: "input",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
      component: "input",
    },
    {
      name: "message",
      label: "Your Message",
      type: "text",
      placeholder: "Tell me about your project or inquiry...",
      component: "textarea",
      rows: 5,
    },
  ];

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "alextaweke@gmail.com",
      link: "mailto:alextaweke@gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+251 979 257 541",
      link: "tel:+251 701 410 074",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Addis Ababa, Ethiopia",
      link: "#",
    },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status.type) {
      setStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        form
      );
      const data = res.data as { success: boolean };

      if (data.success) {
        setStatus({
          type: "success",
          message:
            "🎉 Your message has been sent successfully! I'll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus({
        type: "error",
        message:
          "😔 Sorry, there was an error sending your message. Please try again or email me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStatusStyles = () => {
    switch (status.type) {
      case "success":
        return "bg-green-50 border-green-200 text-green-800 dark:bg-green-900/20 dark:border-green-800 dark:text-green-300";
      case "error":
        return "bg-red-50 border-red-200 text-red-800 dark:bg-red-900/20 dark:border-red-800 dark:text-red-300";
      default:
        return "";
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900/20 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-blue-400/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 left-10 w-16 h-16 bg-purple-400/10 rounded-full blur-xl"></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-800 to-blue-600 dark:from-white dark:to-blue-300 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Have a project in mind? Let's discuss how we can bring your ideas to
            life.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                I'm always interested in new opportunities, whether it's a
                freelance project, full-time role, or just a friendly chat about
                technology.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-700 group"
                >
                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-4">
                Follow me on
              </h4>
              <div className="flex gap-4">
                {["GitHub", "LinkedIn", "Twitter"].map((platform) => (
                  <motion.a
                    key={platform}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-200 dark:border-gray-700"
                  >
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {platform}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-20"></div>
            <form
              onSubmit={handleSubmit}
              className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 space-y-6 border border-white/20 dark:border-gray-700/50"
            >
              {contactFields.map((field, index) => (
                <motion.div
                  key={field.name}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {field.label}
                  </label>
                  {field.component === "input" ? (
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  ) : (
                    <textarea
                      id={field.name}
                      name={field.name}
                      placeholder={field.placeholder}
                      value={form[field.name]}
                      onChange={handleChange}
                      rows={field.rows}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                      required
                      disabled={isSubmitting}
                    />
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </motion.button>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl border-2 ${getStatusStyles()} transition-all duration-300`}
                >
                  <p className="text-center font-medium">{status.message}</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
