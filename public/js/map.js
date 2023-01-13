const loader = new google.maps.plugins.loader.Loader({
    apiKey: '',
    version: 'weekly',
    libraries: ['places']
})
const mapOptions = {
    center: {
        lat: 37.294779,
        lng: 127.013685
    },
    zoom: 5
}
loader.loadCallback(e =>
{
    if (e)
    {
        console.log(e)
    }
    else
    {
        new google.maps.Map(document.getElementById('map'), mapOptions)
    }
})