<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class WeddingGuest extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'name',
        'phone_number',
        'invitation_link',
        'rsvp',
        'title',
        'gender',
        'marital_status',
    ];

    // protected $casts = [
    //     'rsvp' => 'number',
    // ];

    // public function setRsvpAttribute($value)
    // {
    //     $this->attributes['rsvp'] = $value === 'Yes' ? 1 : 0;
    // }
}
