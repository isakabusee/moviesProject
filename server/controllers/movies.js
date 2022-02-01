import MovieTitles from "../models/moviesTitles";

export const getTitles = async (req, res) => {
    try{
        const movieTitles = await MovieTitles.find();
        console.log(movieTitles);

        res.status(200).json(movieTitles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}