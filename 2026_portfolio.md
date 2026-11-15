# 전체 통합 자산 배분 및 포트폴리오 진단 보고서

**기준 일자:** 2026-11-13  

<div id="exchange-rate-calculator" style="background-color: #f8fafc; border: 1.5px solid #cbd5e1; border-radius: 10px; padding: 18px 20px; margin: 16px 0 24px 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
    <span style="font-size: 16px; font-weight: 700; color: #1e293b; display: flex; align-items: center; gap: 6px;">
      💱 기준 환율 연동 자동 변환기
    </span>
    <span style="font-size: 13px; color: #64748b;">
      ※ 환율을 입력·조정하면 아래 모든 원화 환산액, 소계, 총액 및 비중이 즉시 자동 재계산됩니다.
    </span>
  </div>
  <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
    <div style="display: flex; align-items: center; gap: 8px;">
      <label for="fx_usd" style="font-weight: 600; font-size: 14px; color: #334155;">1 USD =</label>
      <input type="number" id="fx_usd" value="1335" step="1" min="0" oninput="recalculatePortfolio()" style="width: 110px; padding: 6px 10px; border: 1.5px solid #94a3b8; border-radius: 6px; font-size: 15px; font-weight: 700; color: #0f172a; text-align: right;">
      <span style="font-size: 14px; font-weight: 600; color: #334155;">KRW</span>
    </div>
    <div style="display: flex; align-items: center; gap: 8px;">
      <label for="fx_eur" style="font-weight: 600; font-size: 14px; color: #334155;">1 EUR =</label>
      <input type="number" id="fx_eur" value="1470" step="1" min="0" oninput="recalculatePortfolio()" style="width: 110px; padding: 6px 10px; border: 1.5px solid #94a3b8; border-radius: 6px; font-size: 15px; font-weight: 700; color: #0f172a; text-align: right;">
      <span style="font-size: 14px; font-weight: 600; color: #334155;">KRW</span>
    </div>
    <button type="button" onclick="resetRates()" style="padding: 6px 14px; background: #ffffff; border: 1px solid #cbd5e1; border-radius: 6px; font-size: 13px; font-weight: 600; color: #475569; cursor: pointer; transition: all 0.2s;">
      기본 환율로 복원
    </button>
  </div>
</div>

**통합 자산 총액:** <span id="top_total_krw" style="font-size: 1.25em; font-weight: 800; color: #0f766e;">₩340,208,387</span>

---

## 1. 자산군(Asset Class)별 배분 현황

| 자산군 | 세부 항목 및 계좌 | 원화 환산액 | 비중 (%) |
| :--- | :--- | :---: | :---: |
| **현금 및 현금성 자산** | **원화 현금 (KRW)** | ₩120,000,000 | <span id="ratio_krw_cash">35.27%</span> |
| | **달러 외화예수금 (메리츠 / $8,250)** | <span id="val_usd_cash" class="calc-usd" data-usd="8250">₩11,013,750</span> | <span id="ratio_usd_cash">3.24%</span> |
| | **유로 현금 (Trade Republic / €7,800)** | <span id="val_eur_cash" class="calc-eur" data-eur="7800">₩11,466,000</span> | <span id="ratio_eur_cash">3.37%</span> |
| | **현금성 자산 소계** | <strong id="subtotal_cash">₩142,479,750</strong> | <strong id="ratio_cash_total">41.88%</strong> |
| **주식 및 ETF** | **미국 주식 및 ETF (13개 종목 / $62,318.05)** | <span id="val_usd_stock_total" class="calc-usd" data-usd="62318.05">₩83,194,597</span> | <span id="ratio_usd_stocks">24.45%</span> |
| | **국내 주식 및 ETF (8개 종목)** | ₩64,248,000 | <span id="ratio_krw_stocks">18.89%</span> |
| | **유럽 주식 (Trade Republic / €3,732.00)** | <span id="val_eur_stock_total" class="calc-eur" data-eur="3732.00">₩5,486,040</span> | <span id="ratio_eur_stocks">1.61%</span> |
| | **주식/ETF 자산 소계** | <strong id="subtotal_stock">₩152,928,637</strong> | <strong id="ratio_stock_total">44.95%</strong> |
| **대체 자산 (가상자산)** | **비트코인 (BTC)** | ₩37,500,000 | <span id="ratio_btc">11.02%</span> |
| | **대체 자산 소계** | **₩37,500,000** | <strong id="ratio_crypto_total">11.02%</strong> |
| **목적성 묶인 자산** | **주택청약종합저축** | ₩7,300,000 | <span id="ratio_savings">2.15%</span> |
| | **묶인 자산 소계** | **₩7,300,000** | <strong id="ratio_locked_total">2.15%</strong> |
| **총합계** | **통합 자산 총액** | <strong id="table_grand_total">₩340,208,387</strong> | **100.00%** |

---

## 2. 주식 및 ETF 포지션 종목별 세부 명세

### 2.1. 미국 주식 및 ETF (USD)
*적용 환율: 1 USD = <span class="display_usd_rate">1,335</span> KRW (상단 기준 환율 연동)*  
*계산 공식: `원화 환산액 = 평가 금액 ($) × USD 기준 환율`*

| 종목명 (티커) | 보유 수량 | 매수 평단가 | 현재가 | 평가 금액 ($) | 원화 환산액 | 수익률 (%) | 주식 내 비중 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **SPDR S&P 500** (SPY) | 22주 | $664.39 | $751.44 | $16,531.68 | <span id="us_stock_SPY" class="calc-usd" data-usd="16531.68">₩22,069,793</span> | **+13.10%** | <span id="us_ratio_SPY">14.43%</span> |
| **Tesla** (TSLA) | 20주 | $362.22 | $389.80 | $7,796.00 | <span id="us_stock_TSLA" class="calc-usd" data-usd="7796.00">₩10,407,660</span> | **+7.61%** | <span id="us_ratio_TSLA">6.81%</span> |
| **Alphabet A** (GOOGL) | 20주 | $321.48 | $295.41 | $5,908.20 | <span id="us_stock_GOOGL" class="calc-usd" data-usd="5908.20">₩7,887,447</span> | **-8.10%** | <span id="us_ratio_GOOGL">5.16%</span> |
| **Invesco NASDAQ 100** (QQQM) | 20주 | $263.82 | $278.59 | $5,571.80 | <span id="us_stock_QQQM" class="calc-usd" data-usd="5571.80">₩7,438,353</span> | **+5.59%** | <span id="us_ratio_QQQM">4.86%</span> |
| **Amazon.com** (AMZN) | 20주 | $213.20 | $265.61 | $5,312.20 | <span id="us_stock_AMZN" class="calc-usd" data-usd="5312.20">₩7,091,787</span> | **+24.58%** | <span id="us_ratio_AMZN">4.64%</span> |
| **CoreWeave** (CRWV) | 90주 | $49.03 | $52.18 | $4,696.20 | <span id="us_stock_CRWV" class="calc-usd" data-usd="4696.20">₩6,269,427</span> | **+6.42%** | <span id="us_ratio_CRWV">4.10%</span> |
| **McDonald's** (MCD) | 16주 | $262.84 | $273.41 | $4,374.56 | <span id="us_stock_MCD" class="calc-usd" data-usd="4374.56">₩5,840,038</span> | **+4.02%** | <span id="us_ratio_MCD">3.82%</span> |
| **Apple** (AAPL) | 10주 | $152.56 | $357.50 | $3,575.10 | <span id="us_stock_AAPL" class="calc-usd" data-usd="3575.10">₩4,772,759</span> | **+134.33%** | <span id="us_ratio_AAPL">3.12%</span> |
| **Microsoft** (MSFT) | 6주 | $347.32 | $524.36 | $3,146.16 | <span id="us_stock_MSFT" class="calc-usd" data-usd="3146.16">₩4,200,124</span> | **+50.97%** | <span id="us_ratio_MSFT">2.75%</span> |
| **NVIDIA** (NVDA) | 15주 | $166.42 | $160.98 | $2,414.70 | <span id="us_stock_NVDA" class="calc-usd" data-usd="2414.70">₩3,223,625</span> | **-3.26%** | <span id="us_ratio_NVDA">2.11%</span> |
| **Palantir Tech** (PLTR) | 10주 | $137.78 | $167.58 | $1,675.80 | <span id="us_stock_PLTR" class="calc-usd" data-usd="1675.80">₩2,237,193</span> | **+21.62%** | <span id="us_ratio_PLTR">1.46%</span> |
| **Nike** (NKE) | 20주 | $65.84 | $37.95 | $759.00 | <span id="us_stock_NKE" class="calc-usd" data-usd="759.00">₩1,013,265</span> | **-42.35%** | <span id="us_ratio_NKE">0.66%</span> |
| **Airbnb** (ABNB) | 3주 | $120.76 | $185.55 | $556.65 | <span id="us_stock_ABNB" class="calc-usd" data-usd="556.65">₩743,128</span> | **+53.65%** | <span id="us_ratio_ABNB">0.49%</span> |
| **미국 주식 소계** | - | - | - | **$62,318.05** | <strong id="us_stock_subtotal" class="calc-usd" data-usd="62318.05">₩83,194,597</strong> | - | <strong id="us_stock_ratio_total">54.40%</strong> |

---

### 2.2. 국내 주식 및 ETF (KRW)

| 종목명 (종목코드) | 보유 수량 | 매수 평단가 | 기준 현재가 | 평가 금액 | 당일 손익 | 누적 손익률 (%) | 주식 내 비중 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **삼성전자** (005930) | 60주 | ₩157,118 | ₩201,500 | ₩12,090,000 | -₩829.99K | **+28.24%** | <span id="kr_ratio_005930">7.91%</span> |
| **SK하이닉스** (000660) | 9주 | ₩1,482,080 | ₩1,264,000 | ₩11,376,000 | -₩1.18M | **-14.71%** | <span id="kr_ratio_000660">7.44%</span> |
| **현대차** (005380) | 30주 | ₩491,567 | ₩293,500 | ₩8,805,000 | +₩300.00K | **-40.29%** | <span id="kr_ratio_005380">5.76%</span> |
| **KODEX 200** (069500) | 100주 | ₩100,561 | ₩84,610 | ₩8,461,000 | -₩510.50K | **-15.86%** | <span id="kr_ratio_069500">5.53%</span> |
| **KB금융** (105560) | 50주 | ₩149,000 | ₩149,000 | ₩7,450,000 | ₩0.00 | **0.00%** | <span id="kr_ratio_105560">4.87%</span> |
| **삼성전자우** (005935) | 40주 | ₩105,947 | ₩160,400 | ₩6,416,000 | -₩452.00K | **+51.39%** | <span id="kr_ratio_005935">4.20%</span> |
| **두산에너빌리티** (034020) | 100주 | ₩89,000 | ₩49,300 | ₩4,930,000 | -₩340.00K | **-44.60%** | <span id="kr_ratio_034020">3.22%</span> |
| **삼성전기** (009150) | 5주 | ₩1,130,000 | ₩944,000 | ₩4,720,000 | -₩855.00K | **-16.46%** | <span id="kr_ratio_009150">3.09%</span> |
| **국내 주식 소계** | - | - | - | **₩64,248,000** | - | - | <strong id="kr_stock_ratio_total">42.01%</strong> |

*참고: KB금융(105560)은 11월 6일 신규 매수 체결 건(50주 @₩149,000)으로 체결 단가를 현재가로 적용.*

---

### 2.3. 유럽 주식 (Trade Republic / EUR)
*적용 환율: 1 EUR = <span class="display_eur_rate">1,470</span> KRW (상단 기준 환율 연동)*  
*계산 공식: `원화 환산액 = 평가 금액 (€) × EUR 기준 환율`*

| 계좌 / 포지션 | 보유 수량 | 매수 평단가 | 현재가 | 평가 금액 (€) | 원화 환산액 | 수익률 (%) | 주식 내 비중 |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Trade Republic 보유주식** | 15주 | €209.03 | €248.80 | €3,732.00 | <span id="val_eu_stock" class="calc-eur" data-eur="3732.00">₩5,486,040</span> | **+19.03%** | <span id="eu_stock_ratio">3.59%</span> |
| **유럽 주식 소계** | - | - | - | **€3,732.00** | <strong id="eu_stock_subtotal" class="calc-eur" data-eur="3732.00">₩5,486,040</strong> | - | <strong id="eu_stock_ratio_total">3.59%</strong> |

---

## 3. 통화(Currency)별 자산 비중

| 통화 구분 | 세부 내역 | 원화 환산액 | 통화 비중 (%) |
| :--- | :--- | :---: | :---: |
| **원화 자산 (KRW)** | 원화 현금(1.2억 원) + 국내 주식(₩64,248,000) + 비트코인(3,750만 원) + 청약저축(730만 원) | ₩229,048,000 | <span id="currency_ratio_krw">67.33%</span> |
| **달러 자산 (USD)** | 미국 주식 13개 종목($62,318.05) + 메리츠 달러 예수금($8,250) = **$70,568.05** | <span id="currency_val_usd" class="calc-usd" data-usd="70568.05">₩94,208,347</span> | <span id="currency_ratio_usd">27.69%</span> |
| **유로 자산 (EUR)** | 유럽 주식(€3,732) + Trade Republic 유로 예수금(€7,800) = **€11,532** | <span id="currency_val_eur" class="calc-eur" data-eur="11532.00">₩16,952,040</span> | <span id="currency_ratio_eur">4.98%</span> |
| **합계** | | <strong id="currency_grand_total">₩340,208,387</strong> | **100.00%** |

---

## 4. 유동성(Liquidity) 기준 분류

* **즉시 가용 현금성 자산 (<span id="liq_ratio_cash">41.88%</span>)**: <strong id="liq_val_cash">₩142,479,750</strong>
  * 원화 현금: ₩120,000,000 *(1.2억 원)*
  * 달러 외화예수금: $8,250 (<span class="calc-usd" data-usd="8250">₩11,013,750</span>)
  * 유로 현금: €7,800 (<span class="calc-eur" data-eur="7800">₩11,466,000</span>)
* **유동성 투자 자산 (<span id="liq_ratio_invest">55.97%</span>)**: <strong id="liq_val_invest">₩190,428,637</strong>
  * 주식/ETF 자산: <span id="liq_val_stock">₩152,928,637</span>
  * 비트코인: ₩37,500,000
* **비유동성 묶인 자산 (<span id="liq_ratio_locked">2.15%</span>)**: <strong id="liq_val_locked">₩7,300,000</strong>
  * 주택청약종합저축: ₩7,300,000

---

## 5. 포트폴리오 핵심 진단 및 시사점

### 5.1. 현금 흐름 및 최근 잔액 업데이트 (11월 13일 기준)
* **현금성 자산 최신 잔액**:
  * **원화 현금**: **₩120,000,000** (1.2억 원)
  * **달러 외화예수금**: **$8,250** (약 ₩11,013,750 / 환율 1,335원 적용)
  * **유로 현금**: **€7,800** (약 ₩11,466,000 / 환율 1,470원 적용)
  * **현금성 자산 총액**: **₩142,479,750** (전체 자산의 41.88%)

### 5.2. 섹터 다변화 및 주식 포지션 변화
* **KB금융(105560) 신규 편입**:
  * 50주(₩7,450,000)가 신규 편입되어 국내 주식 총액이 기존 ₩56,798,000에서 **₩64,248,000**으로 증가했습니다.
  * 기존 반도체(삼성전자, SK하이닉스) 및 자동차·원전에 집중되어 있던 국내 포트폴리오에 고배당 금융 섹터가 신설되어 방어력이 강화되었습니다.
* **삼성전자(보통주)**: 4주 추가 매수로 총 60주 보유 중입니다.

### 5.3. 지수 비중 및 자산 건전성
* 주식 내 지수 ETF 비중:
  * **SPY**: <span id="diag_spy_ratio">14.43%</span> (목표 20%)
  * **QQQM**: <span id="diag_qqqm_ratio">4.86%</span> (목표 9%)
  * **KODEX 200**: <span id="diag_kodex_ratio">5.53%</span>
  * 지수 ETF 3종 합산 비중은 <strong id="diag_index_total_ratio">24.82%</strong>입니다.
* 총자산 대비 현금성 자산 비중이 <strong id="diag_cash_ratio">41.88%</strong>(<span id="diag_cash_val">약 1억 4,248만 원</span>)로 여전히 막강한 유동성을 확보하고 있어, 향후 미국 지수(SPY, QQQM) 목표 비중 달성을 위한 추가 분할 매수나 시장 조정 시 대응 여력이 충분합니다.

---

## 6. 환율 연동 계산 함수 가이드 (Spreadsheet / 코드 수식)

마크다운 뷰어 외에 **Excel / Google Sheets** 등 스프레드시트로 보고서를 이전하거나 관리하실 때 사용할 수 있는 표준 함수 공식입니다.

### 엑셀 / 구글 시트 수식 (셀 참조 방식)
* **기준 셀 지정**:
  * `USD_KRW`: 셀 `$B$5` (예: `1335`)
  * `EUR_KRW`: 셀 `$B$6` (예: `1470`)
* **원화 환산 함수식**:
  * USD 자산: `=ROUND(USD_평가금액 * $B$5, 0)`
  * EUR 자산: `=ROUND(EUR_평가금액 * $B$6, 0)`
* **비중 계산 함수식**:
  * 자산군 비중: `=(해당항목_원화환산액 / 통합자산총액_셀) * 100`

---

<!-- 자동 재계산 자바스크립트 엔진 -->
<script>
function fmtKRW(num) {
  return '₩' + Math.round(num).toLocaleString('ko-KR');
}

function fmtPct(num) {
  return num.toFixed(2) + '%';
}

function resetRates() {
  const usdInput = document.getElementById('fx_usd');
  const eurInput = document.getElementById('fx_eur');
  if (usdInput) usdInput.value = 1335;
  if (eurInput) eurInput.value = 1470;
  recalculatePortfolio();
}

function recalculatePortfolio() {
  const usdInput = document.getElementById('fx_usd');
  const eurInput = document.getElementById('fx_eur');
  const usdRate = parseFloat(usdInput ? usdInput.value : 1335) || 0;
  const eurRate = parseFloat(eurInput ? eurInput.value : 1470) || 0;

  // 1. 안내 텍스트 내 환율 갱신
  document.querySelectorAll('.display_usd_rate').forEach(el => el.textContent = usdRate.toLocaleString('ko-KR'));
  document.querySelectorAll('.display_eur_rate').forEach(el => el.textContent = eurRate.toLocaleString('ko-KR'));

  // 2. data-usd 속성을 가진 모든 원화 환산 요소 실시간 변환
  document.querySelectorAll('.calc-usd').forEach(el => {
    const usd = parseFloat(el.getAttribute('data-usd')) || 0;
    el.textContent = fmtKRW(usd * usdRate);
  });

  // 3. data-eur 속성을 가진 모든 원화 환산 요소 실시간 변환
  document.querySelectorAll('.calc-eur').forEach(el => {
    const eur = parseFloat(el.getAttribute('data-eur')) || 0;
    el.textContent = fmtKRW(eur * eurRate);
  });

  // 4. 고정 원화 자산
  const krwCash = 120000000;
  const krwStocks = 64248000;
  const btcVal = 37500000;
  const savingsVal = 7300000;

  // 5. 환율 연동 소계 계산
  const usdCashKRW = Math.round(8250 * usdRate);
  const eurCashKRW = Math.round(7800 * eurRate);
  const totalCash = krwCash + usdCashKRW + eurCashKRW;

  const usdStockKRW = Math.round(62318.05 * usdRate);
  const eurStockKRW = Math.round(3732.00 * eurRate);
  const totalStocks = krwStocks + usdStockKRW + eurStockKRW;

  const totalCrypto = btcVal;
  const totalLocked = savingsVal;

  const grandTotal = totalCash + totalStocks + totalCrypto + totalLocked;

  // 6. 상단 및 표 총액/소계 DOM 갱신
  const topTotal = document.getElementById('top_total_krw');
  if (topTotal) topTotal.textContent = fmtKRW(grandTotal);

  const subCash = document.getElementById('subtotal_cash');
  if (subCash) subCash.textContent = fmtKRW(totalCash);

  const subStock = document.getElementById('subtotal_stock');
  if (subStock) subStock.textContent = fmtKRW(totalStocks);

  const tableTotal = document.getElementById('table_grand_total');
  if (tableTotal) tableTotal.textContent = fmtKRW(grandTotal);

  // 7. 자산군별 비중(%) 갱신
  const setEl = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  setEl('ratio_krw_cash', fmtPct((krwCash / grandTotal) * 100));
  setEl('ratio_usd_cash', fmtPct((usdCashKRW / grandTotal) * 100));
  setEl('ratio_eur_cash', fmtPct((eurCashKRW / grandTotal) * 100));
  setEl('ratio_cash_total', fmtPct((totalCash / grandTotal) * 100));

  setEl('ratio_usd_stocks', fmtPct((usdStockKRW / grandTotal) * 100));
  setEl('ratio_krw_stocks', fmtPct((krwStocks / grandTotal) * 100));
  setEl('ratio_eur_stocks', fmtPct((eurStockKRW / grandTotal) * 100));
  setEl('ratio_stock_total', fmtPct((totalStocks / grandTotal) * 100));

  setEl('ratio_btc', fmtPct((totalCrypto / grandTotal) * 100));
  setEl('ratio_crypto_total', fmtPct((totalCrypto / grandTotal) * 100));

  setEl('ratio_savings', fmtPct((totalLocked / grandTotal) * 100));
  setEl('ratio_locked_total', fmtPct((totalLocked / grandTotal) * 100));

  // 8. 주식 내부 비중 갱신
  setEl('us_stock_ratio_total', fmtPct((usdStockKRW / totalStocks) * 100));
  setEl('kr_stock_ratio_total', fmtPct((krwStocks / totalStocks) * 100));
  setEl('eu_stock_ratio_total', fmtPct((eurStockKRW / totalStocks) * 100));
  setEl('eu_stock_ratio', fmtPct((eurStockKRW / totalStocks) * 100));

  // 미국 개별주 주식 내 비중
  const usStocks = [
    { id: 'us_ratio_SPY', usd: 16531.68 },
    { id: 'us_ratio_TSLA', usd: 7796.00 },
    { id: 'us_ratio_GOOGL', usd: 5908.20 },
    { id: 'us_ratio_QQQM', usd: 5571.80 },
    { id: 'us_ratio_AMZN', usd: 5312.20 },
    { id: 'us_ratio_CRWV', usd: 4696.20 },
    { id: 'us_ratio_MCD', usd: 4374.56 },
    { id: 'us_ratio_AAPL', usd: 3575.10 },
    { id: 'us_ratio_MSFT', usd: 3146.16 },
    { id: 'us_ratio_NVDA', usd: 2414.70 },
    { id: 'us_ratio_PLTR', usd: 1675.80 },
    { id: 'us_ratio_NKE', usd: 759.00 },
    { id: 'us_ratio_ABNB', usd: 556.65 }
  ];
  usStocks.forEach(s => {
    const stockKRW = s.usd * usdRate;
    setEl(s.id, fmtPct((stockKRW / totalStocks) * 100));
  });

  // 국내 개별주 주식 내 비중
  const krStocks = [
    { id: 'kr_ratio_005930', krw: 12090000 },
    { id: 'kr_ratio_000660', krw: 11376000 },
    { id: 'kr_ratio_005380', krw: 8805000 },
    { id: 'kr_ratio_069500', krw: 8461000 },
    { id: 'kr_ratio_105560', krw: 7450000 },
    { id: 'kr_ratio_005935', krw: 6416000 },
    { id: 'kr_ratio_034020', krw: 4930000 },
    { id: 'kr_ratio_009150', krw: 4720000 }
  ];
  krStocks.forEach(s => {
    setEl(s.id, fmtPct((s.krw / totalStocks) * 100));
  });

  // 9. 통화별 비중 갱신
  const totalUSD_KRW = Math.round(70568.05 * usdRate);
  const totalEUR_KRW = Math.round(11532.00 * eurRate);
  const totalKRW_Only = 229048000;
  setEl('currency_ratio_krw', fmtPct((totalKRW_Only / grandTotal) * 100));
  setEl('currency_ratio_usd', fmtPct((totalUSD_KRW / grandTotal) * 100));
  setEl('currency_ratio_eur', fmtPct((totalEUR_KRW / grandTotal) * 100));
  setEl('currency_grand_total', fmtKRW(grandTotal));

  // 10. 유동성 분류 갱신
  setEl('liq_ratio_cash', fmtPct((totalCash / grandTotal) * 100));
  setEl('liq_val_cash', fmtKRW(totalCash));
  const investTotal = totalStocks + totalCrypto;
  setEl('liq_ratio_invest', fmtPct((investTotal / grandTotal) * 100));
  setEl('liq_val_invest', fmtKRW(investTotal));
  setEl('liq_val_stock', fmtKRW(totalStocks));
  setEl('liq_ratio_locked', fmtPct((totalLocked / grandTotal) * 100));
  setEl('liq_val_locked', fmtKRW(totalLocked));

  // 11. 진단 섹션 지수 비중 및 유동성 갱신
  const spyRatio = (16531.68 * usdRate / totalStocks) * 100;
  const qqqmRatio = (5571.80 * usdRate / totalStocks) * 100;
  const kodexRatio = (8461000 / totalStocks) * 100;
  setEl('diag_spy_ratio', fmtPct(spyRatio));
  setEl('diag_qqqm_ratio', fmtPct(qqqmRatio));
  setEl('diag_kodex_ratio', fmtPct(kodexRatio));
  setEl('diag_index_total_ratio', fmtPct(spyRatio + qqqmRatio + kodexRatio));
  setEl('diag_cash_ratio', fmtPct((totalCash / grandTotal) * 100));
  const cashManWon = (totalCash / 100000000).toFixed(2);
  setEl('diag_cash_val', `약 ${cashManWon}억 원`);
}

// 초기 로딩 시 자동 1회 계산 실행
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', recalculatePortfolio);
} else {
  recalculatePortfolio();
}
</script>
