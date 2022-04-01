import ApolloClient, { gql } from "apollo-boost";
import { orderBy } from "lodash";

async function fetchData() {
	const url = "https://api.spacex.land/graphql/";
	const container = document.querySelector(".results");

	const client = new ApolloClient({
		uri: url,
	});

	const json = await client.query({
		query: gql`
			{
				launchesPast(limit: 10) {
					mission_name
					launch_site {
						site_name_long
					}
				}
			}
		`,
	});
	console.log(json.data.launchesPast);
	let apiData = json.data.launchesPast;
	console.log("apiData:", apiData);
	const orderedApiData = orderBy(apiData, ["mission_name"], ["asc"]);
	console.log(orderedApiData);
	orderedApiData.forEach(function (data) {
		container.innerHTML += `
        <div class="card">
        <h2>Mission name: ${data.mission_name}</h2>
        <p>Launch site: ${data.launch_site.site_name_long}</p>
        </div>
        `;
	});
}

fetchData();
