/**
 * TODO(developer): Uncomment this variable and replace with your
 *   Google Analytics 4 property ID before running the sample.
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
    printRunReportResponse(response);
  }

  runRealtimeReportWithMultipleDimensions();

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

    console.log('Report result:');
    response.rows.forEach(row => {
      console.log(
        `${row.dimensionValues[0].value}, ${row.metricValues[0].value}`,`${row.dimensionValues[1].value}, ${row.metricValues[0].value}`
      );
    });
    console.log(response)
    //console.log(response.rows)
  }