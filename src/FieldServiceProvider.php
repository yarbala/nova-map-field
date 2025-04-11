<?php

namespace Yarbala\SimpleMap;

use Illuminate\Support\Facades\Config;
use Illuminate\Support\ServiceProvider;
use Laravel\Nova\Events\ServingNova;
use Laravel\Nova\Nova;

class FieldServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if ($this->app->runningInConsole()) {
            $this->publishes([
                __DIR__.'/../config/simple-map.php' => base_path('config/simple-map.php'),
            ], 'simple-map-config');
        }

        Nova::serving(function (ServingNova $event) {
            Nova::script('simple-map-google', $this->googleMapsSource());
            Nova::mix('simple-map', __DIR__.'/../dist/mix-manifest.json');
        });
    }

    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->mergeConfigFrom(__DIR__.'/../config/simple-map.php', 'simple-map');
    }

    protected function googleMapsSource(): string
    {
        $script = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&loading=async&libraries=maps&v=weekly';

        return str_replace('YOUR_API_KEY', Config::get('simple-map.api_key'), $script);
    }
}
