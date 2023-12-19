import { NightwatchTests, NightwatchBrowser } from 'nightwatch';
import { RewardPage } from '../nightwatch/page-objects/rewards';

describe('Leaderboard : Update Reward Test', () => {

    // TC: 1164
    it('admin should be able to open reward tab', (browser: NightwatchBrowser) => {
        const rewardPage= browser.page.rewards() as RewardPage;
        browser
        .url('https://nashtechglobal.qa.go1percent.com')
        .window.maximize();
        rewardPage
        .signIn()
        .goToRewards()
        .assert.urlContains('rewards/list', 'Reward tab is opened')
        .end();
    });
});

