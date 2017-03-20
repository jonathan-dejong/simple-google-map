/**
 * Get lat lon here: http://www.latlong.net/
 *
 */
var map,
	landskrona = {
		lat: 55.870348,
		lng: 12.830080
	},
	vellinge = {
		lat: 55.470893,
		lng: 13.019990
	},
	ljungby = {
		lat: 56.833877,
		lng: 13.941042
	},
	style = [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"administrative.land_parcel","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"saturation":"-100"},{"visibility":"on"},{"lightness":"100"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"poi","elementType":"all","stylers":[{"saturation":"-100"},{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"saturation":"-100"},{"lightness":"-30"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"weight":"0.5"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"visibility":"simplified"},{"weight":"0.5"},{"lightness":"-45"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"road.local","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"saturation":"-100"},{"visibility":"on"}]},{"featureType":"transit","elementType":"geometry.fill","stylers":[{"visibility":"on"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"weight":"0.5"},{"lightness":"-45"}]},{"featureType":"transit.line","elementType":"geometry.stroke","stylers":[{"visibility":"on"}]},{"featureType":"transit.line","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit.station","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":"-100"},{"lightness":"59"}]}];


function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: vellinge,
		zoom: 14,
		styles: style,
		disableDefaultUI: true
	});
}
