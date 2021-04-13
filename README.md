## Waxal [![Travis Status](https://travis-ci.org/mozilla/common-voice.svg?branch=main)](https://travis-ci.org/mozilla/common-voice)

This is waxal a web app built from Common Voice an Open Source plateform, Waxal is dedicated for collecting speech data on Senegalese local languages in order to create public datasets for training trigger words detection models.

### Official Website

[waxal.galsen.ai](https://waxal.galsen.ai)

### Keyword spotting
Keyword spotting refers to the task of learning to detect spoken keywords. It interfaces all modern voice-based virtual assistants on the market: Amazon’s Alexa, Apple’s Siri, and the Google Home device. Contrarily to speech recognition models, keyword spotting doesn’t run on the cloud, but directly on the device. This sets up a natural constraint on the model size, energy consumption, and compute efficiency of the model because often the hardware devices have limited memory and limited computing power. The prerequisite to perform such a task with African languages would be the creation of a dedicated dataset. Indeed, African languages account for 30.15% of the 7111 living languages (Orife et al. 2020), which provide great diversity. Unfortunately, they are barely represented in natural language processing (NLP) research.

### Code of Conduct

By participating in this project, you're agreeing to uphold the [Mozilla Community Participation Guidelines](https://www.mozilla.org/en-US/about/governance/policies/participation/). If you need to report a problem, please see our [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) guide.

### Licensing and content source

This repository is released under [MPL (Mozilla Public License) 2.0](LICENSE).

The majority of our sentence text in `/server/data` comes directly from user submissions in our [Sentence Collector](https://github.com/Common-Voice/sentence-collector/) or they are scraped from Wikipedia using our [extractor tool](https://github.com/Common-Voice/common-voice-wiki-scraper), and are released under a [CC0 public domain Creative Commons license](https://creativecommons.org/share-your-work/public-domain/cc0/).

Any files that follow the pattern `europarl-VERSION-LANG.txt` (such as [europarl-v7-de.txt](https://github.com/mozilla/voice-web/blob/main/server/data/de/europarl-v7-de.txt)) were extracted with our thanks from the [Europarl Corpus](http://www.statmt.org/europarl/), which features transcripts from proceedings in the European parliament.

### Contributing

There are many ways to get involved with Common Voice - you don't have to know how to code to contribute! For more information, check out [CONTRIBUTING.md](./CONTRIBUTING.md).

#### Add or Edit Sentences

If you would like to submit new sentences or edit existing translations, please see this [detailed guide on Discourse on how to do that](https://discourse.mozilla.org/t/readme-how-to-see-my-language-on-common-voice/31530). We **do not** accept direct pull requests for localization content. Check out your language on the [Common Voice project through Mozilla's Pontoon localization system](https://pontoon.mozilla.org/projects/common-voice/) for more information.

### Discussion

For general discussion (feedback, ideas, random musings), head to our [Discourse Category](https://discourse.mozilla-community.org/c/voice).

For technical problems or suggestions, please use the [GitHub issue tracker](https://github.com/mozilla/voice-web/issues).

Or come [chat with us on Matrix](https://chat.mozilla.org/#/room/#common-voice:mozilla.org).
