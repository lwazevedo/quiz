describe('Routes Questions', () => {

	const dbQuestion = {
		"questions": [{
			"id": 1,
			"title": "De manhã, você:",
			"weight": 1,
			"answers": [{

				"id": 1,
				"title": "Acorda cedo e come fruntas metodicamente.",
				"serieId": 1
			},
			{
				"id": 2,
				"title": "Sai da cama com o despertador e se prepara para a batalha da semana.",
				"serieId": 2
			},
			{
				"id": 3,
				"title": "Só consegue lembrar do seu nome depois do café.",
				"serieId": 3
			},
			{
				"id": 4,
				"title": "Levanta e faz café para todos da casa.",
				"serieId": 4
			},
			{
				"id": 5,
				"title": "Passa o cadé e conserta um erro no HTML",
				"serieId": 5
			}
			]
		}]}

		describe('Route GET /questions', () => {
			it('should return a list of questions', (done) => {
				request
				.get('/questions')
				.end((err, res) => {
					expect(res.body.questions[0].id).to.be.eql(dbQuestion.questions[0].id);
					expect(res.body.questions[0].title).to.be.eql(dbQuestion.questions[0].title);
					expect(res.body.questions[0].weight).to.be.eql(dbQuestion.questions[0].weight);
					done(err);
				});
			});
		});

	});
