class DB {
    statham_id = 1;
    au_id = 2;
    klichko_id = 3;

    db = {
        owners: [
            {"id": this.statham_id, "name": "Statham"},
            {"id": this.au_id, "name": "AU"},
            {"id": this.klichko_id, "name": "Klichko"},
        ],
        quotes: [
            {
                "id": 1, 
                "owner_id": this.statham_id, 
                "quote": "Люди, которые считают, что деньги могут сделать все, сами готовы все сделать за деньги."
            },
            {
                "id": 2, 
                "owner_id": this.statham_id, 
                "quote": "Как бы ни были прекрасны ваши слова, судить о вас будут по вашим поступкам."
            },
            {
                "id": 3, 
                "owner_id": this.statham_id, 
                "quote": "Ум ценится дорого, когда дешевеет сила."
            },
            {
                "id": 4, 
                "owner_id": this.statham_id, 
                "quote": "Какой я к черту бренд? Бренд — это Ким Кардашьян."
            },
            {
                "id": 5, 
                "owner_id": this.statham_id, 
                "quote": "Я пришел из ниоткуда, поэтому не боюсь вернуться обратно."
            },
            {
                "id": 6, 
                "owner_id": this.statham_id, 
                "quote": "В любом процессе важна не скорость, а удовольствие."
            },
            {
                "id": 7, 
                "owner_id": this.au_id, 
                "quote": "Использовать докер - это как стрелять из пушки по воробьям"
            },
            {
                "id": 8, 
                "owner_id": this.klichko_id, 
                "quote": "Я гордо встану грудью за спиной Украины!"
            },
            {
                "id": 9, 
                "owner_id": this.klichko_id, 
                "quote": "Я видел запах."
            },
            {
                "id": 10, 
                "owner_id": this.klichko_id, 
                "quote": "Искусство — это массаж души через глаза."
            },
            {
                "id": 11, 
                "owner_id": this.klichko_id, 
                "quote": "Я захожу там, где готов заходить."
            },
            {
                "id": 12, 
                "owner_id": this.klichko_id, 
                "quote": "Бокс — это моя жизнь, но моя жизнь это не только бокс."
            },
            {
                "id": 13, 
                "owner_id": this.klichko_id, 
                "quote": "Один в поле не двое."
            },
            {
                "id": 14, 
                "owner_id": this.klichko_id, 
                "quote": "Поздравляю всех с новым годом, желаю чтобы вы не знали горя, удачи, любви, счастья и особенно здоровья."
            },
            {
                "id": 15, 
                "owner_id": this.au_id, 
                "quote": "Ее же, кроме меня, по сути они и не нужна."
            },
            {
                "id": 16, 
                "owner_id": this.au_id, 
                "quote": "Выберем рублем."
            },
            {
                "id": 17, 
                "owner_id": this.au_id, 
                "quote": "Чем мне еще нравится Мак, так это тем, что не приходится танцевать с бубном, во многих случаях."
            },
            {
                "id": 18, 
                "owner_id": this.au_id, 
                "quote": "Из уже пора в датацентры ставить. Вместо Зеонов.(ipad)"
            }
            
            
        ]
    }

    getAllQuotes() {
        const { quotes } = this.db;
        return quotes;
    }

    getAllOwners() {
        const { owners } = this.db;
        return owners;
    }

    getOwnerByID(owner_id) {
        const { owners } = this.db;
        return owners.filter(owner => owner.id === Number(owner_id))[0];
    }

    getQuotesByOwnerID(id) {
        const { quotes } = this.db;
        return quotes.filter(quote => quote.owner_id === Number(id));
    }

    getOwnerWithQuotes(owner_id) {
        return {
            owner: this.getOwnerByID(owner_id),
            quotes: this.getQuotesByOwnerID(owner_id)
        };
    }
}

export default DB;