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
}
