
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const SkillItem: React.FC<{ name: string; delay: number; certLink?: string }> = ({ name, delay, certLink }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="group p-6 glass-panel rounded-2xl border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.1)]"
    >
      <div className="mb-2">
        <span className="text-sm font-semibold uppercase tracking-widest text-gray-300 group-hover:text-white transition-colors">{name}</span>
      </div>
      {certLink && (
        <motion.a 
          href={certLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-widest text-purple-500/60 hover:text-purple-400 transition-colors group/link"
        >
          <ExternalLink className="w-3 h-3" />
          <span className="border-b border-purple-500/20 group-hover/link:border-purple-400/50">View Certificate 🔗</span>
        </motion.a>
      )}
    </motion.div>
  );
};

const SkillCategory: React.FC<{ title: string; skills: { name: string; certLink?: string }[] }> = ({ title, skills }) => {
  return (
    <div className="mb-20 relative">
      <motion.h4 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="text-2xl font-royal mb-10 text-purple-400/80 border-l-2 border-purple-500/30 pl-6 flex items-center gap-3"
      >
        {title}
      </motion.h4>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill, index) => (
          <SkillItem 
            key={skill.name} 
            name={skill.name} 
            certLink={skill.certLink}
            delay={index * 0.05} 
          />
        ))}
      </div>
      <div className="absolute -bottom-10 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </div>
  );
};

export const Skills: React.FC = () => {
  const categories = [
    {
      title: "🧠 Artificial Intelligence & Generative AI",
      skills: [
        { name: "Generative AI", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_advanced-generative-ai-models-and-architecture-activity-7373731914521686017-atQo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Large Language Models (LLMs)", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_advanced-generative-ai-building-llm-applications-activity-7427274728182034432-7x3m?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Prompt Engineering", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_essentials-of-generative-ai-prompt-engineering-activity-7360554856559898624-k1Pp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Transformer Models", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_transformer-models-and-bert-model-certification-activity-7425455973231910912-lCev?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
      ]
    },
    {
      title: "📊 Data Science & Analytics",
      skills: [
        { name: "Machine Learning", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_simplilearn-online-courses-bootcamp-activity-7245078324631248897-iN-c?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Data Analytics", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_data-analytics-activity-7365266197103218689-ydnk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Power BI", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_pc-da-pl-300-microsoft-power-bi-certification-activity-7315659456766255104-_UDO?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Statistical Analysis", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_business-analytics-with-excel-activity-7315661785204682753-zHAI?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
      ]
    },
    {
      title: "🗄 Databases & Cloud",
      skills: [
        { name: "MongoDB", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_mongodb-nosql-databasemanagement-activity-7258007829305786368-2eU_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Data Modeling", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_learningjourney-mongodb-professionalgrowth-activity-7218586136863023105-leFF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Schema Design", certLink: "https://learn.mongodb.com/c/keNvbhgGS5OdEdNO9MmrvQ" },
        { name: "Cloud Computing", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_introduction-to-cloud-computing-activity-7326107216443228160-k8lj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
      ]
    },
    {
      title: "💻 Programming & Development",
      skills: [
        { name: "Python", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_dataanalyst-python-activity-7176934112308441088-SVjY?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "R Programming", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_r-for-data-science-activity-7325444688692289538-2Cly?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "SQL", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_sql-simplilearn-krct-activity-7179123708165312513-UGQC?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
        { name: "Web Development", certLink: "https://www.linkedin.com/posts/abinesh-r-0a99a02a2_internship-webdevelopment-techexperience-activity-7354522677530800128-VwLk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEkd9oEBKRWhN35EkaPDMsSBzc89JYElxy4" },
      ]
    }
  ];

  return (
    <div className="py-12">
      <div className="text-center mb-24">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-purple-500 text-[11px] font-semibold tracking-[0.8em] uppercase mb-6"
        >
          Technical Mastery
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, filter: 'blur(0px)' }}
          className="text-5xl md:text-7xl font-royal uppercase tracking-tighter"
        >
          Skills <span className="text-gray-500">&</span> Certifications
        </motion.h3>
      </div>

      <div className="max-w-5xl mx-auto">
        {categories.map((cat) => (
          <SkillCategory key={cat.title} title={cat.title} skills={cat.skills} />
        ))}
      </div>
    </div>
  );
};
