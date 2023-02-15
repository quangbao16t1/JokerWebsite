import connectDB from "../models/index.js";

const JokerModel = connectDB.jokers;

const JokerRepository = {};

JokerRepository.getAllJokers = async () => {
    return await JokerModel.findAll();
}

JokerRepository.getJokerById = async (joker_id) => {
    return await JokerModel.findOne({
        where: { id: joker_id },
        include: [{
            model: connectDB.votes,
        }]
    })
}

JokerRepository.updateJoker = async (jokerId, joker) => {
    const jokerUpdate = await JokerModel.findOne({ where: { id: jokerId } });

    if (!jokerUpdate) throw "Joker not found!!!";

    Object.assign(jokerUpdate, joker);
    jokerUpdate.updateAt = Date.now();
    await jokerUpdate.save();

    return jokerUpdate;
}

JokerRepository.deleteJoker = async (jokerId) => {
    const jokerDelete = await JokerModel.findOne({ where: { id: jokerId } });

    if (!jokerDelete) throw "Joker not found!!!";

    return await JokerModel.destroy({ where: { id: jokerId } });
}

JokerRepository.createJoker = async (joker) => {
    
    const jokerCreate = new JokerModel();

    Object.assign(jokerCreate, joker);
    jokerCreate.createAt = Date.now();

    await jokerCreate.save();
}

export default JokerRepository;