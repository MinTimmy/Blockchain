// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed_BTC_USD;
    AggregatorV3Interface internal priceFeed_ETH_USD;
    AggregatorV3Interface internal priceFeed_JPY_USD;
    AggregatorV3Interface internal priceFeed_LINK_USD;

    constructor() {
        priceFeed_BTC_USD = AggregatorV3Interface(
            0x1b44F3514812d835EB1BDB0acB33d3fA3351Ee43
        );
        
        priceFeed_ETH_USD = AggregatorV3Interface(
            0x694AA1769357215DE4FAC081bf1f309aDC325306
        );

        priceFeed_JPY_USD = AggregatorV3Interface(
            0x8A6af2B75F23831ADc973ce6288e5329F63D86c6
        );

        priceFeed_LINK_USD = AggregatorV3Interface(
            0xc59E3633BAAC79493d908e63626716e204A45EdF
        );
    }
    function getLatestPrice_BTC_USD() public view returns (uint80, int , uint, uint, uint80) {
        
        (
            uint80 roundID ,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed_BTC_USD.latestRoundData();
        return (roundID, price, startedAt, timeStamp, answeredInRound);
    }


    function getLatestPrice_ETH_USD() public view returns (uint80, int , uint, uint, uint80) {
        
        (
            uint80 roundID ,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed_ETH_USD.latestRoundData();
        return (roundID, price, startedAt, timeStamp, answeredInRound);
    }

    function getLatestPrice_JPY_USD() public view returns (uint80, int , uint, uint, uint80) {
       
        (
            uint80 roundID ,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed_JPY_USD.latestRoundData();
        return (roundID, price, startedAt, timeStamp, answeredInRound);
    }

    function getLatestPrice_LINK_USD() public view returns (uint80, int , uint, uint, uint80) {
        
        (
            uint80 roundID ,
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = priceFeed_LINK_USD.latestRoundData();
        return (roundID, price, startedAt, timeStamp, answeredInRound);
    }

}