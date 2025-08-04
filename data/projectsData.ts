interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'RustSim',
    description: `RustSim是一个用Rust编写的现代、高性能SPICE电路仿真器。它提供准确高效的电子电路仿真，专注于类型安全、内存效率和计算性能。`,
    imgSrc: '/static/images/rustsim.png',
    href: 'https://github.com/ICMHG/RustSim',
  },
  {
    title: 'FlowMind',
    description: `FlowMind 是一个面向开发者/研究者的智能工作助手应用，旨在整合分散的工作流程，通过AI技术提升工作效率。它将GitHub项目、Zotero论文、思源笔记、腾讯会议等工具整合到一个统一的平台中。`,
    imgSrc: '/static/images/flowmind.png',
    href: 'https://github.com/PomeoOps/FlowMind',
  },
]

export default projectsData
