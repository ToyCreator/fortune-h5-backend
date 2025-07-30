
function generateFate(name, gender, birth) {
  const lucky = ["事业顺利", "感情和谐", "贵人运强", "财运旺盛"];
  const advice = ["注意健康", "今年适合学习", "避免冲动投资", "宜静不宜动"];
  return {
    name,
    gender,
    birth,
    八字: "庚子年 甲午月 丙辰日 己巳时",
    五行: "金水木火火土",
    运势: lucky[Math.floor(Math.random() * lucky.length)],
    建议: advice[Math.floor(Math.random() * advice.length)]
  };
}

module.exports = { generateFate };
