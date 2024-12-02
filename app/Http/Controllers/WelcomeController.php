<?php

namespace App\Http\Controllers;

use App\Models\WeddingGuest;
use Inertia\Inertia;

class WelcomeController extends Controller
{
    public function index($id, $name)
    {
        $weddingGuest = WeddingGuest::find($id);

        return Inertia::render('Welcome', [
            'weddingGuest' => $weddingGuest,
            'id' => $id,
            'name' => $name
        ]);
    }

    public function update($id)
    {
        dd($id);
    }

    public function destroy($id) {}

    public function search() {}
}
