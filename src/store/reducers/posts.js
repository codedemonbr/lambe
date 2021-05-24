import { ADD_POST } from "../actions/actionsTypes";

const initialState = {
    posts: [
        {
            id: Math.random(),
            nickname: "Francisco Leandro Lima",
            email: "franciscolima@teste.com",
            image: require("../../../assets/imgs/bw.jpg"),
            comments: [],
        },
        {
            id: Math.random(),
            nickname: "Roberto Carlos",
            email: "roberto@teste.com",
            image: require("../../../assets/imgs/boat.jpg"),
            comments: [
                {
                    nickname: "Ana Maria Braga",
                    comment: "Chama os cachorros!",
                },
                {
                    nickname: "João Arthur",
                    comment: "Bora Bahêa minha poha",
                },
            ],
        },
        {
            id: Math.random(),
            nickname: "Landolfo Rodrigues",
            email: "landolfo@teste.com",
            image: require("../../../assets/imgs/gate.jpg"),
            comments: [],
        },
        {
            id: Math.random(),
            nickname: "Rafael Pereira Filho",
            email: "rafael@teste.com",
            image: require("../../../assets/imgs/fence.jpg"),
            comments: [
                {
                    nickname: "John Ray Sheldon",
                    comment: "Stunning!",
                },
                {
                    nickname: "Ana Julia Arruda",
                    comment: "Foto linda!  Onde foi tirada?",
                },
            ],
        },
    ],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                posts: state.posts.concat({
                    ...action.payload,
                }),
            };
        default:
            return state;
    }
};

export default reducer;
