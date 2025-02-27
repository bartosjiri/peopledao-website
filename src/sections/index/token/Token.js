import React, {useState} from "react"
import Fade from "react-reveal/Fade"
import CountUp from 'react-countup'

import Section from "../../../components/section/Section"

import * as tokenStyle from "./Token.module.scss"

import parseCountupValue from "../../../helpers/parseCountupValue"
import { fetchMarketData } from "../../../util/api/dune"
import { connect } from 'react-redux';

const TokenSection = (props) => {
  const [countupReady, setCountupReady] = useState(false)

  // @TODO: Dynamic values

  const { last_price, market_cap, total_circulating } = props;

  const rank = parseCountupValue({value: 2324, reverse: true})
  const cap = parseCountupValue({value: market_cap})
  const volume = parseCountupValue({value:total_circulating})

  return (
    <Section name="token" className={tokenStyle.token}>
      <div className={tokenStyle.wrapper}>
        <Fade distance="25%" onReveal={() => setCountupReady(true)}>
          <div className={tokenStyle.content}>
            <div className={tokenStyle.header}>
              <span className={tokenStyle.governance}>Governed by</span>
              <span className={tokenStyle.title}>Constitution<strong>DAO</strong></span>
              <div className={tokenStyle.price}>
                <div className={tokenStyle.label}>$PEOPLE</div>
                <div className={tokenStyle.value}>${last_price} USD</div>
              </div>
            </div>
            <div className={tokenStyle.values}>
              {/* <div className={tokenStyle.item}>
                <span className={tokenStyle.label}>Rank</span>
                <span className={tokenStyle.value}>
                  {countupReady && (
                    <CountUp
                      start={rank.start}
                      end={rank.end}
                      decimals={rank.decimals}
                      duration={5}
                    />
                  )}
                </span>
              </div> */}
              <div className={tokenStyle.item}>
                <span className={tokenStyle.label}>Market cap </span>
                <span className={tokenStyle.value}>
                  {"$"}
                  {countupReady && (
                    <CountUp
                      start={cap.start}
                      end={cap.end}
                      decimals={cap.decimals}
                      duration={5}
                    />
                  )}
                  {" M"}
                </span>
              </div>
              <div className={tokenStyle.item}>
                <span className={tokenStyle.label}>Total Circulating</span>
                <span className={tokenStyle.value}>
                  {countupReady && (
                    <CountUp
                      start={volume.start}
                      end={volume.end}
                      decimals={volume.decimals}
                      duration={5}
                    />
                  )}
                  {" M"}
                </span>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  )
}

const mapStateToProps = (state) => {
  return {

    last_price: state.last_price,
    market_cap: state.market_cap,
    total_circulating: state.total_circulating,
    
  }
}

export default connect(mapStateToProps, null)(TokenSection);
// export default TokenSection