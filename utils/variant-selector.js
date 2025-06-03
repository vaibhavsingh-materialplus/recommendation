/**
 * This function simulates a script that takes some time to execute
 * and returns one of the variants: "A", "B", or "C"
 */

var propertyId = '489998208';

const {BetaAnalyticsDataClient} = require('@google-analytics/data');

  // Initialize client that will be used to send requests. This client only
  // needs to be created once, and can be reused for multiple requests.
  const analyticsDataClient = new BetaAnalyticsDataClient();

  // Runs a realtime report on a Google Analytics 4 property.
  async function runRealtimeReportWithMultipleDimensions() {
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      dimensions: [
        {
          name: 'country',
        },
        {
          name: 'city',
        },
      ],
      metrics: [
        {
          name: 'activeUsers',
        },
      ],
    });
    return printRunReportResponse(response);
  }

  

  // Prints results of a runReport call.
  function printRunReportResponse(response) {
    console.log(`${response.rowCount} rows received`);
    response.dimensionHeaders.forEach(dimensionHeader => {
      console.log(`Dimension header name: ${dimensionHeader.name}`);
    });
    response.metricHeaders.forEach(metricHeader => {
      console.log(
        `Metric header name: ${metricHeader.name} (${metricHeader.type})`
      );
    });

    let x1 = "";
  let x2 = "";
  let y1 = "";

    console.log('Report result:');
    response.rows.forEach(row => {
      x1 = row.dimensionValues[0]?.value || "";
    x2 = row.dimensionValues[1]?.value || "";
    y1 = row.metricValues[0]?.value || "";

    console.log(`${x1}, ${y1}`);
    console.log(`${x2}, ${y1}`);
  });
    

    console.log(response)

  const report = {
    country: x1,
    city: x2,
    user: y1,
  };
  //console.log("Final report JSON:", JSON.stringify(report, null, 2));

  return report
    
    //console.log(response.rows)
  }





async function getVariant() {
  // Simulate a delay (e.g., API call, computation, etc.)
  //await new Promise((resolve) => setTimeout(resolve, 2000))

  // You can replace this with your actual logic to determine the variant
  // For example, this could be based on:
  // - User data or preferences
  // - A/B testing assignment
  // - Time of day or geographic location
  // - Random assignment with specific weights

  //const variants = ["A", "B", "C"]
  //const randomIndex = Math.floor(Math.random() * variants.length)

  //return variants[randomIndex]
  runRealtimeReportWithMultipleDimensions();

}

module.exports = { getVariant };
