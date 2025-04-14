<?php

namespace Yarbala\SimpleMap;

use Laravel\Nova\Fields\Field;
use MatanYadaev\EloquentSpatial\Enums\Srid;
use MatanYadaev\EloquentSpatial\Objects\Point;

class SimpleMap extends Field
{
    protected ?string $pointColumn = null;

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
            'api_key' => config('simple-map.api_key'),
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

    public function pointColumn(string $pointColumn): self
    {
        $this->pointColumn = $pointColumn;

        return $this;
    }

    public function fillModelWithData(object $model, mixed $value, string $attribute): void
    {
        if (is_string($value) && $this->pointColumn && $attribute === $this->pointColumn) {
            $point = json_decode($value);
            $value = new Point($point->lat, $point->lng, Srid::WGS84->value);
        }

        parent::fillModelWithData($model, $value, $attribute);
    }
}
