db.produtos.find({ ingredientes: "picles" }, 
{ valoresNutricionais: { $slice: 3 }, _id: 0, nome: 1, ingredientes: 1 });