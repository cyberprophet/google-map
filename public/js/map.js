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
    if (window.matchMedia)
    {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches)
        {
            console.log('dark')
        }
        else
        {
            console.log('light')
        }
    }
    if (e)
    {
        console.log(e)
    }
    else
    {
        new google.maps.Map(document.getElementById('map'), mapOptions)
    }
})