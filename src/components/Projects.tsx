import { projects } from '../data';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Trophy } from 'lucide-react';

export default function Projects() {
    return (
        <section className="py-20 bg-black text-white">
            <div className="container mx-auto px-4">
                <h3 className="text-4xl font-bold mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400">
                    Mis Proyectos
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 transition-colors"
                        >
                            <div className="aspect-video overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {project.hasAward && (
                                    <div className="absolute top-2 right-2 bg-yellow-500/90 text-black px-2 py-1 rounded-md flex items-center gap-1 text-xs font-bold shadow-lg backdrop-blur-sm">
                                        <Trophy size={12} />
                                        <span>Hackaton Winner</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6">
                                <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-zinc-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a
                                        href={project.demoUrl}
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors"
                                    >
                                        <ExternalLink size={16} /> Demo/Devpost
                                    </a>
                                    <a
                                        href={project.repoUrl}
                                        className="flex items-center gap-2 text-sm font-medium text-white hover:text-purple-400 transition-colors"
                                    >
                                        <Github size={16} /> Código
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
