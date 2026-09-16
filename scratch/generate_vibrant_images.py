import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

def create_riyadh_skyline(width=2560, height=1440, accent_color=(16, 231, 132), theme="hero"):
    # Dark luxury sky gradient: Deep navy/emerald black
    img = Image.new("RGBA", (width, height), (10, 13, 12, 255))
    draw = ImageDraw.Draw(img)

    # 1. Sky Gradient
    for y in range(height):
        r = int(10 + (25 - 10) * (y / height))
        g = int(13 + (40 - 13) * (y / height))
        b = int(12 + (30 - 12) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    # 2. Geometric Perspective Grid lines
    grid_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    grid_draw = ImageDraw.Draw(grid_layer)
    horizon = int(height * 0.65)
    
    # Grid lines radiating from vanishing point
    vp_x, vp_y = width // 2, horizon
    for angle in range(-80, 85, 5):
        rad = math.radians(angle)
        end_x = int(vp_x + math.tan(rad) * height)
        end_y = height
        grid_draw.line([(vp_x, vp_y), (end_x, end_y)], fill=(accent_color[0], accent_color[1], accent_color[2], 18), width=2)
    
    # Horizontal grid lines
    for y in range(horizon, height, 35):
        grid_draw.line([(0, y), (width, y)], fill=(accent_color[0], accent_color[1], accent_color[2], 15), width=1)

    img = Image.alpha_composite(img, grid_layer)
    draw = ImageDraw.Draw(img)

    # 3. Draw Architectural Skyscrapers (KAFD & Kingdom Tower Silhouette Shapes)
    buildings_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    b_draw = ImageDraw.Draw(buildings_layer)

    # Background distant buildings
    random.seed(42 if theme=="hero" else (100 if theme=="business" else 200))
    
    num_buildings = 28
    for i in range(num_buildings):
        b_w = random.randint(80, 180)
        b_h = random.randint(300, 750)
        b_x = int((i / num_buildings) * width) - random.randint(-20, 20)
        b_y = horizon - b_h + 100

        # Building body
        b_color = (15 + random.randint(0, 15), 22 + random.randint(0, 20), 20 + random.randint(0, 25), 230)
        b_draw.rectangle([b_x, b_y, b_x + b_w, horizon + 100], fill=b_color, outline=(accent_color[0], accent_color[1], accent_color[2], 40))

        # Windows grid on building
        for wy in range(b_y + 20, horizon, 22):
            for wx in range(b_x + 10, b_x + b_w - 10, 16):
                if random.random() > 0.4:
                    w_alpha = random.randint(100, 220)
                    w_col = (accent_color[0], accent_color[1], accent_color[2], w_alpha) if random.random() > 0.6 else (220, 235, 255, w_alpha)
                    b_draw.rectangle([wx, wy, wx + 8, wy + 12], fill=w_col)

    # Icon Skyscrapers (Kingdom Center style arc tower & Faisaliah pyramid tower)
    # Kingdom Tower Silhouette (Center-Right)
    kt_x = int(width * 0.68)
    kt_w = 140
    kt_h = 820
    kt_y = horizon - kt_h + 80
    b_draw.rectangle([kt_x, kt_y, kt_x + kt_w, horizon + 100], fill=(12, 18, 16, 240), outline=(accent_color[0], accent_color[1], accent_color[2], 90))
    # Kingdom Tower parabolic cutout shape at top
    b_draw.ellipse([kt_x + 15, kt_y + 30, kt_x + kt_w - 15, kt_y + 220], fill=(20, 30, 26, 255))
    b_draw.line([(kt_x + kt_w//2, kt_y + 110), (kt_x + kt_w//2, kt_y + 210)], fill=accent_color + (255,), width=4)

    # Al Faisaliah Pyramid Silhouette (Center-Left)
    af_x = int(width * 0.28)
    af_h = 760
    af_y = horizon - af_h + 80
    points = [(af_x + 70, af_y), (af_x, horizon + 100), (af_x + 140, horizon + 100)]
    b_draw.polygon(points, fill=(14, 20, 18, 240), outline=(accent_color[0], accent_color[1], accent_color[2], 80))
    # Golden/Green Globe near top of Faisaliah
    b_draw.ellipse([af_x + 52, af_y + 120, af_x + 88, af_y + 156], fill=accent_color + (230,))

    img = Image.alpha_composite(img, buildings_layer)

    # 4. Ambient Neon Glows & Light Rays
    glow_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    g_draw = ImageDraw.Draw(glow_layer)

    # Glowing emerald radial aura at center bottom
    g_draw.ellipse([width//2 - 600, horizon - 200, width//2 + 600, horizon + 400], fill=(accent_color[0], accent_color[1], accent_color[2], 35))
    glow_layer = glow_layer.filter(ImageFilter.GaussianBlur(120))

    img = Image.alpha_composite(img, glow_layer)

    # 5. Crisp Foreground Glass Reflections & Light Beams
    fg_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    fg_draw = ImageDraw.Draw(fg_layer)
    
    # Modern sleek horizontal accent line across horizon
    fg_draw.line([(0, horizon), (width, horizon)], fill=accent_color + (140,), width=2)

    # Subtle ambient gradient vignetting for crisp contrast
    img = Image.alpha_composite(img, fg_layer)
    return img.convert("RGB")

def create_heritage_architecture(width=2560, height=1440):
    # Diriyah Clay Heritage meets modern glowing architecture
    img = Image.new("RGBA", (width, height), (15, 18, 16, 255))
    draw = ImageDraw.Draw(img)

    # Golden Sand & Emerald Dusk Gradient
    for y in range(height):
        r = int(18 + (35 - 18) * (y / height))
        g = int(22 + (40 - 22) * (y / height))
        b = int(20 + (30 - 20) * (y / height))
        draw.line([(0, y), (width, y)], fill=(r, g, b, 255))

    # Najdi Geometric Pattern Layers
    pattern_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    p_draw = ImageDraw.Draw(pattern_layer)

    # Draw Najdi triangular crenellations & geometric motif grid
    step = 120
    for x in range(0, width, step):
        # Najdi triangular motifs
        p_draw.polygon([(x, 300), (x + step//2, 220), (x + step, 300)], fill=(16, 231, 132, 18))
        p_draw.polygon([(x, 600), (x + step//2, 520), (x + step, 600)], fill=(16, 231, 132, 12))

    img = Image.alpha_composite(img, pattern_layer)

    # Draw Diriyah Palace Silhouettes (At-Turaif mud-brick clay fortress walls)
    diriyah_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    d_draw = ImageDraw.Draw(diriyah_layer)
    horizon = int(height * 0.7)

    # Fortress Walls
    d_draw.rectangle([100, horizon - 350, 900, horizon + 100], fill=(22, 28, 24, 240), outline=(16, 231, 132, 60))
    d_draw.rectangle([850, horizon - 450, 1600, horizon + 100], fill=(18, 24, 20, 240), outline=(16, 231, 132, 60))
    d_draw.rectangle([1550, horizon - 380, 2400, horizon + 100], fill=(20, 26, 22, 240), outline=(16, 231, 132, 60))

    # Triangular Najdi Windows on Fortress Wall
    for x in range(150, 2300, 100):
        for y in range(horizon - 300, horizon - 50, 80):
            d_draw.polygon([(x, y + 25), (x + 15, y), (x + 30, y + 25)], fill=(16, 231, 132, 90))

    img = Image.alpha_composite(img, diriyah_layer)
    return img.convert("RGB")

def create_corporate_office_interior(width=2560, height=1440):
    # Luxury empty boardroom looking out onto glowing Riyadh skyline
    base_sky = create_riyadh_skyline(width, height, accent_color=(16, 231, 132), theme="business")
    
    # Overlay glass window frames of executive boardroom (empty of people)
    overlay = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)

    # Huge floor-to-ceiling glass window mullions
    mullion_color = (20, 25, 23, 230)
    # Vertical window pillars
    draw.rectangle([0, 0, 80, height], fill=mullion_color)
    draw.rectangle([width - 80, 0, width, height], fill=mullion_color)
    draw.rectangle([width//3 - 25, 0, width//3 + 25, height], fill=mullion_color)
    draw.rectangle([(2*width)//3 - 25, 0, (2*width)//3 + 25, height], fill=mullion_color)

    # Top and bottom window frame headers
    draw.rectangle([0, 0, width, 60], fill=mullion_color)
    draw.rectangle([0, height - 120, width, height], fill=mullion_color)

    # Polished mahogany / glass executive boardroom table silhouette (Empty, no people)
    draw.ellipse([width//4, height - 220, (3*width)//4, height + 300], fill=(12, 16, 14, 250), outline=(16, 231, 132, 80))

    # Combine with sky
    base_sky.paste(overlay, (0, 0), overlay)
    return base_sky

# Generate all images requested by user!
import os
out_dir = "d:/F_L_W/Saudia/saudi/saudi/public/images"

print("Generating high-resolution vibrant images without persons...")

# 1. corporateBusinessServices.png
img1 = create_corporate_office_interior(2560, 1440)
img1.save(os.path.join(out_dir, "corporateBusinessServices.png"), "PNG", quality=95)
print("Saved corporateBusinessServices.png")

# 2. businessSetup.png
img2 = create_riyadh_skyline(2560, 1440, accent_color=(16, 231, 132), theme="hero")
img2.save(os.path.join(out_dir, "businessSetup.png"), "PNG", quality=95)
print("Saved businessSetup.png")

# 3. businessServices.png
img3 = create_riyadh_skyline(2560, 1440, accent_color=(52, 211, 153), theme="business")
img3.save(os.path.join(out_dir, "businessServices.png"), "PNG", quality=95)
print("Saved businessServices.png")

# 4. aboutHeritagePage.png
img4 = create_heritage_architecture(2560, 1440)
img4.save(os.path.join(out_dir, "aboutHeritagePage.png"), "PNG", quality=95)
print("Saved aboutHeritagePage.png")

# 5. Replace existing hero-riyadh.png, service-business.png, service-realestate.png, service-technology.png, service-residency.png, about-vision.png with ultra-vibrant images clean of people
create_riyadh_skyline(2560, 1440, (16, 231, 132), "hero").save(os.path.join(out_dir, "hero-riyadh.png"), "PNG", quality=95)
create_corporate_office_interior(2560, 1440).save(os.path.join(out_dir, "service-business.png"), "PNG", quality=95)
create_riyadh_skyline(2560, 1440, (16, 185, 129), "business").save(os.path.join(out_dir, "service-realestate.png"), "PNG", quality=95)
create_riyadh_skyline(2560, 1440, (16, 231, 132), "tech").save(os.path.join(out_dir, "service-technology.png"), "PNG", quality=95)
create_heritage_architecture(2560, 1440).save(os.path.join(out_dir, "service-residency.png"), "PNG", quality=95)
create_heritage_architecture(2560, 1440).save(os.path.join(out_dir, "about-vision.png"), "PNG", quality=95)

print("All vibrant background images generated successfully!")
