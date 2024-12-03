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
        $weddingGuest = WeddingGuest::find($id);

        if ($weddingGuest) {
            $weddingGuest->update([
                'rsvp' => 1
            ]);
        }

        return redirect()->route('welcome.index', ['id' => $id, 'name' => $weddingGuest->name])->with('success', 'Thank you for accepting our invitation.');
    }

    public function destroy($id) {}

    public function search() {}
}
