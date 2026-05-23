const News = require('../src/models/newsModel');

const getNewsList = async (req, res) => {
	try {
		const news = await News.find();
		res.status(200).json(news);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

module.exports = getNewsList;