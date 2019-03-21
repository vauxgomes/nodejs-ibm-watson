/**
 * @author Vaux Gomes
 * @since 03/21/2019
 */

// Importing credentials and environment variables
const ENVS = require('./.env');

// NLU Object
const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1.js');
const nlu = new NaturalLanguageUnderstandingV1(ENVS.API_KEY);

// Sample text
const text = 'Amazingly, CNN just released a poll at 71%, saying that the economy is in the best shape since 2001, 18 years! WOW, is CNN becoming a believer?';

//
const options = {
	text,
	features: {
		entities: { },
		keywords: { },
		sentiment: { }
	}
}

// Request
nlu.analyze(options, (err, results) => {
    console.log('TEXTO');
    console.log(text);

    console.log('\nRESULTADO');
	if (err)
		console.log(err);
    else
	   console.log(results);
});
