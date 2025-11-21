import { socials } from '../data';
import { motion } from 'framer-motion';

export default function Socials() {
    return (
        <section className="py-20 bg-zinc-900 text-white">
            <div className="container mx-auto px-4 text-center">
                <h3 className="text-3xl font-bold mb-12">Conecta conmigo</h3>
                <div className="flex justify-center gap-8 flex-wrap">
                    {socials.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, color: "#d8b4fe" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col items-center gap-2 text-gray-400 transition-colors"
                        >
                            <social.icon size={40} />
                            <span className="text-sm font-medium">{social.name}</span>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
