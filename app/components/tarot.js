import { Cards } from "../data/cards";
export default {
    name: "Card",
    data() {
        return {
            major: true,
            name: "",
            meaning: "",
            emoji: "",
            emoji1: "",
            emoji2: "",
            icon: "emoji",
            cards: Cards
        };
    },
    methods: {
        getMyCard() {
            const card = this.cards[this.randomNumber];
            this.name = card.name;
            if (card.type != "major") {
                this.major = false;
                this.emoji1 = "~/assets/emoji/" + card.value + ".png";
                this.emoji2 = "~/assets/emoji/" + card.suit + ".png";
            } else {
                this.major = true;
                this.emoji = "~/assets/emoji/" + card.value + ".png";
            }

            if (this.shuffle == 0) {
                this.meaning = card.meaning_up;
                this.icon = "emoji";
            } else {
                this.meaning = card.meaning_rev;
                this.reversed = true;
                this.icon = "emoji reversed";
            }
        },
        getOneCard(context, sNum, rNum) {
            this.currentTab = context;
            const card = this.cards[rNum];
            this.name = card.name;
            if (card.type != "major") {
                this.major = false;
                this.emoji1 = "~/assets/emoji/" + card.value + ".png";
                this.emoji2 = "~/assets/emoji/" + card.suit + ".png";
            } else {
                this.major = true;
                this.emoji = "~/assets/emoji/" + card.value + ".png";
            }
            if (sNum == 0) {
                this.meaning = card.meaning_up;
                this.icon = "emoji";
            } else {
                this.meaning = card.meaning_rev;
                this.reversed = true;
                this.icon = "emoji reversed";
            }
        }
    },
    computed: {
        shuffle() {
            return Math.floor(Math.random() * 2);
        },
        randomNumber() {
            return Math.round(Math.random() * 72);
        }
    }
};
