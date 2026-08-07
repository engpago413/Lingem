import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
		{
		id: "acg",
		name: "ACG",
		icon: "material-symbols:live-tv",
		desc: "动漫、番组与 ACG 资源",
		weight: 100,
		items: [
			{
				title: "Bangumi 番组计划",
				url: "https://bangumi.tv/",
				desc: "ACG 管理与交流社区",
				icon: "/favicon/bangumi.png",
				weight: 10,
			},
			{
				title: "VCB-Studio",
				url: "https://vcb-s.com/",
				desc: "BD 压制组发布站",
				icon: "/favicon/vcb-s.png",
				weight: 7,
			},
			{
				title: "長門番堂",
				url: "https://yuc.wiki/",
				desc: "番组日历",
				weight: 6,
			},
			{
				title: "Anime Score",
				url: "https://ac.ysxp.de/rankings",
				desc: "动画评分排行",
				weight: 5,
			},
		],
	},
	{
		id: "ai-art",
		name: "AI 绘画",
		icon: "material-symbols:palette",
		desc: "AI 图像生成相关工具与资源",
		weight: 95,
		items: [
			{
				title: "ComfyUI 官方文档",
				url: "https://docs.comfy.org/zh",
				desc: "ComfyUI 使用教程",
				weight: 10,
			},
			{
				title: "Civitai（蓝站）",
				url: "https://civitai.com/",
				desc: "AI 模型分享社区主站",
				weight: 9,
			},
			{
				title: "Civitai（红站）",
				url: "https://civitai.red/",
				desc: "额外包含 18R 内容",
				weight: 8,
			},
			{
				title: "RunningHub",
				url: "https://www.runninghub.cn/",
				desc: "云端 ComfyUI 运行平台",
				weight: 7,
			},
			{
				title: "Hugging Face",
				url: "https://huggingface.co/",
			desc: "模型托管与开源社区",
			weight: 6,
			},
			{
				title: "魔搭社区",
				url: "https://www.modelscope.cn/home",
				desc: "阿里系模型托管平台",
				weight: 5,
			},
			{
				title: "枯卜 · 站酷主页",
				url: "https://www.zcool.com.cn/u/23982857",
				desc: "ComfyUI 教程，时间较老",
				weight: 4,
			},
		],
	},
	{
		id: "japanese",
		name: "日语学习",
		icon: "material-symbols:language",
		desc: "日语自学工具与教程",
		weight: 90,
		items: [
			{
				title: "赛高の日语学习工具",
				url: "https://noheartpen.github.io/awesome-japanese-study-tools/",
				desc: "日语学习工具汇总",
				weight: 10,
			},
			{
				title: "你永远也没法学会外语",
				url: "https://l-m-sherlock.github.io/ZhiHuArchive/564422318.html",
				desc: "二语习得科普文章",
				icon: "/favicon/Thoughts Memo.png",
				weight: 9,
			},
			{
				title: "Refold 路线图",
				url: "https://l-m-sherlock.github.io/ZhiHuArchive/671671625.html",
				desc: "Refold 语言学习体系",
				icon: "/favicon/Thoughts Memo.png",
				weight: 8,
			},
			{
				title: "基于二语习得理论的",
				url: "https://my.feishu.cn/wiki/YeOSwsG7giLuQxkcDFscUXVZn2f",
				desc: "日语学习指南",
				weight: 7,
			},
			{
				title: "日语打字练习",
				url: "https://kanabr.vercel.app/zh-hans",
				desc:"自适应日语假名输入练习",
				weight: 6,
			},
			{
				title: "Jimaku",
				url: "https://jimaku.cc/",
				desc: "动漫日文字幕库",
				weight: 4,
			},
			{
				title: "Faust",
				url: "https://alist.erogame.space/",
				desc: "Gal 原版资源站",
				icon: "/favicon/openlist.png",
				weight: 3,
			},
			{
				title: "jpdb.io",
				url: "https://jpdb.io/",
				desc: "日漫文本难易度分析",
				weight: 5,
			},
		],
	},
	{
		id: "other",
		name: "其他",
		icon: "material-symbols:more-horiz",
		desc: "论坛、工具与杂项",
		weight: 70,
		items: [
			{
				title: "Microsoft Activation Scripts",
				url: "https://massgrave.dev/",
				desc: "MAS · Windows 激活工具",
				weight: 10,
			},
			{
				title: "Git 教程",
				url: "https://liaoxuefeng.com/books/git/introduction/index.html",
				desc: "廖雪峰的官方网站",
				weight: 9,
			},
			{
				title: "BT之家",
				url: "https://www.1lou.me/",
				desc: "电影资源站",
				weight: 8,
			},
		],
	},
];
