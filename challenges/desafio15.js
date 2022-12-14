// Adicione o campo `avaliacao` em todos os documentos da coleção e efetue alterações nesse campo
// Crie uma query que inclua o campo `avaliacao` do tipo `NumberInt`, com o valor `0` em todos os documentos da coleção.

db.produtos.updateMany({}, { $set: { avaliacao: NumberInt(0) } });

// Crie uma query que incremente o valor do campo `avaliacao` em `5` em todos os sanduíches de carne do tipo `bovino`. 

db.produtos.updateMany({ tags: { $all: ["bovino"] } }, { $inc: { avaliacao: 5 } });

// Crie uma query que incremente o valor do campo `avaliacao` em `3` em todos os sanduíches de `ave`.

db.produtos.updateMany({ tags: { $all: ["ave"] } }, { $inc: { avaliacao: 3 } });

db.produtos.find({}, { _id: 0, nome: 1, avaliacao: 1 });
