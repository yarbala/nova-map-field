<?php

namespace Yarbala\SimpleMap;

use Laravel\Nova\Fields\Field;

class SimpleMap extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'simple-map';

    public function __construct($name, mixed $attribute = null, ?callable $resolveCallback = null)
    {
        parent::__construct($name, $attribute, $resolveCallback);

        $this->withMeta([
            'lat' => config('simple-map.default_lat'),
            'lng' => config('simple-map.default_lng'),
            'zoom' => config('simple-map.default_zoom'),
        ]);
    }

    public function defaultLatLng(float $lat, float $lng): self
    {
        return $this->withMeta([
            'lat' => $lat,
            'lng' => $lng,
        ]);
    }

    public function zoom(int $zoom): self
    {
        return $this->withMeta([
            'zoom' => $zoom,
        ]);
    }
}
